"use client"

import "./style.scss";
import { FaChevronDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Task from "../Component/Task";
import Add from "../Component/Component1/Add";
import { useState } from "react";


const CenterNav = () => {
  const[tasks, setTasks] =useState([
    {
      id:1,
      Task: "Jogging",
      emoji: "💪",
      extra:"",

        start: "06:00",
        end: "07:30",

    }
  ])
  console.log(tasks)

  return (
    <div className="main_content">
      <div>
        <div className="top_main">
          <div className="main-para">
            <p className="main_para_one">
              Good Morning, Sullivan! <span className="main_hand"> 👋</span>
            </p>
            <p className="main_para_two">Today,Wed 29 Jan 2025</p>
          </div>
          <div className="main_cta">
            <div className="btn">
              <FaChevronDown className="chevi" />
              <p>Today</p>
            </div>
            <div className="btn_one">
            <GiHamburgerMenu />
            </div>
          </div>
        </div>
        <Task tasks={tasks} setTasks={setTasks} />
      </div>
      <Add setTasks={setTasks} tasks={tasks}/>
    </div>
  );
};

export default CenterNav;
