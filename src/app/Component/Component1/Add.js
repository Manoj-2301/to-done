"use client"
import { useState } from "react";
import Image from "next/image"; // Correct import
import { FaPlus } from "react-icons/fa";
import Form from "../Component2/form";
import "./style.scss";

const Add = ({setTasks,tasks}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const clickToOpen = () => {
    setIsFormOpen((addform) => !addform);
  };

  return (
    <div>
      <div className="add_task" onClick={clickToOpen}>
        <div className="add_title">
          <p>
            <FaPlus />
          </p>
          <p>Create new Task</p>
        </div>
        <div className="icons">
          <div className="command-icon">
            <Image
              src="/command1.png"
              alt="command icon"
              width={22}
              height={22}
            />
          </div>
          <div className="command-ico">N</div>
        </div>
      </div>


      {isFormOpen && (
        <div>
          <Form setTasks={setTasks} tasks={tasks}/>
        </div>
      )}
    </div>
  );
};

export default Add;
