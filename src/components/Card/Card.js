import React, { useState } from "react";
import EditTodo from "../EditTodo";
import TodoServices from "../../Services/todoServices";
import toast from "react-hot-toast";

const Card = ({ allTask }) => {

    const [showModal, setShowModal] = useState(false);

    const handleedit=()=>{
      setShowModal(true);
    }
    const handleDelete = async (taskId) => {
  try {
    await TodoServices.deleteTodo(taskId);
    toast.success("Task Deleted Successfully");


  } catch (error) {
    console.error("Delete Error:", error);
    toast.error(error?.response?.data?.message || error.message || "Failed to delete task");
  }
};
    
  return (
    <>
      {allTask?.map((task, i) => (
        <>
        <div
          className="card border-primary mb-3 mt-3"
          style={{ maxWidth: "18rem" }}
          key={i}
        >
          <div className="card-header">
            <div className="chead">
              <h6>{task?.title.substring(0, 10)}</h6>
              <h6
                className={
                  task?.isCompleted === true ? "task-cmp " : "task-inc"
                }
              >
                {task?.isCompleted === true ? "Completed " : "incomlete"}
              </h6>
            </div>
          </div>
          <div className="card-body">
            <h6 style={{ fontWeight: "bold" }}>{task?.title}</h6>
            <p className="card-text">{task?.description}</p>
            <h6>Date : {task?.createdAt.substring(0, 10)}</h6>
          </div>
          <div className="card-footer bg-transparent border-primary">
            <button className="btn btn-warning" title="EDIT Task" onClick={handleedit}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="btn btn-danger ms-2" title="Delete Task"  onClick={() => handleDelete(task._id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
        <div>
          {showModal && <EditTodo task={task} setShowModal={setShowModal}/>}
        </div>
        </>
      ))}
    </>
  );
};

export default Card;