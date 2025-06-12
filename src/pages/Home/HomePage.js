
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import PopupModal from "../../components/Layout/Popupmodel";
import TodoServices from "../../Services/todoServices";
import Card from "../../components/Card/Card";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const [displayedTasks, setDisplayedTasks] = useState([]);
  //handle modal
  const openModalHandler = () => {
    setShowModal(true);
  };
  const handleSearch = () => {
  if (!searchTerm.trim()) {
    setDisplayedTasks(allTask); // Reset to all tasks if input is empty
    return;
  }

  const filtered = allTask.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setDisplayedTasks(filtered);
};


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("todoapp"));
    const id = userData && userData?.user._id;
    console.log(id);
    const getUserTask = async () => {
      try {
        const { data } = await TodoServices.getAllTodo(id);
       console.log(data);
        setAllTask(data?.todos);
        setDisplayedTasks(data?.todos);
      } catch (error) {
        console.log(error);
      }
    };
    getUserTask();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add-task">
          <h1>Your Task</h1>
   <div className="d-flex align-items-center gap-2">
  <input
    type="search"
    className="form-control"
    placeholder="Search your task"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button
    className="btn btn-sm btn-primary d-flex align-items-center justify-content-center"
    onClick={handleSearch}
    title="Search"
    style={{ width: "36px", height: "36px", padding: "0" }}
  >
    <i className="fa fa-search"></i>
  </button>
</div>

          <button className=" btn btn-primary" onClick={openModalHandler}>
            Create Task <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {allTask && <Card allTask={displayedTasks} />}
        {/* ========== modal =========== */}
        <PopupModal
          showModal={showModal}
          setShowModal={setShowModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      </div>
    </>
  );
};

export default HomePage;
