import React, { useState } from 'react'
import TodoServices from '../Services/todoServices';
import toast from 'react-hot-toast';

const EditTodo = ({task,setShowModal}) => {
     const [title, setTitle] = useState(task?.title);
      const [description, setDescription] = useState(task?.description);
     const[isCompleted,setisCompleted]=useState(task?.isCompleted)

      const handleClose=()=>{
      setShowModal(false)
      }
      console.log(isCompleted)

const handleselectchange=(e)=>{
   setisCompleted(e.target.value)
}
const id=task?._id

      const handleSubmit=async()=>{
         try {
      const userData = JSON.parse(localStorage.getItem("todoapp"));
      const createdBy = userData && userData?.user._id;
      const data = { title, description, createdBy,isCompleted };
      if (!title || !description) {
        return toast.error("Please prvide title or description");
      }
       await TodoServices.updateTodo(id,data);
      setShowModal(false);
      toast.success("Task Updated Successfully");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
      }
  return (
     <>
      {task && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update the Task</h5>
                <button
                  className="btn-close"
                  aria-label="close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="floatigTextarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <label htmlFor="floatigTextarea">Dscription</label>
                </div>
                <div className='my-3'>
                    <select className='form-select' onChange={handleselectchange}>
                        <option selected>Status</option>
                       <option value={true}>Completed</option>
                        <option value={false}>Incompleted</option>
        
                    </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditTodo
