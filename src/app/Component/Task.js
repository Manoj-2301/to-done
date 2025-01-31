"use client"
import "./style.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";

const Task = ({ tasks,setTasks }) => {
  const Delete = (index) => {
    setTasks(tasks.filter(task => task.index !== index));
  };
  return (
    <div className="task_content">
      {tasks.map((task,index) => (
        <div key={index} className="task_box">
          <div className="task_add">
            <input type="checkbox" className="check" />
            <p>{task.Task}</p>
            {task.emoji && <p className="fav_icon">{task.emoji}</p>}
           {task.extra && <p className="type">{task.extra}</p>}
          </div>
          <div className="task_time">
            <p className="time">
              <IoTimeOutline />
              {task.start} - {task.end}
            </p>
            <p className="dot_btn" onClick={() => Delete(task.index)}>
              <BsThreeDotsVertical />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
