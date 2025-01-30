import "./style.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";

const Task = ({tasks}) => {


  return (
    <div className="task_content" >
      {tasks.map((task, index) => (
        <div key={index} className="task_box">
          <div className="task_add">
            <input type="checkbox" className="check" />
            <p>{task.name}</p>
            <p className="fav_icon">{task.emoji}</p>
            <p className="type">extra</p>
          </div>
          <div className="task_time">
            <p className="time">
            <IoTimeOutline />
              {task.time.start} - {task.time.end}
            </p>
            <p className="dot_btn"><BsThreeDotsVertical />
            </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Task;
