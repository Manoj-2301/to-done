"use client"
import "./style.scss";
import { useState } from "react"
const form = ({setTasks, tasks}) => {
    const [text, setText] = useState('');
    const [emoji, setEmoji] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const submit = (event) => {
        event.preventDefault();

        if (text && emoji && startTime && endTime) {
            const newTask = {
              name: text,
              emoji: emoji,
              time: {
                start: startTime,
                end: endTime,
              },
            };

          setTasks([...tasks, newTask]);


          setText("");
      setEmoji("");
      setStartTime("");
      setEndTime("");
        }
      };

    return (
        <div>
            <form className="form_field" onSubmit={submit}>
                <div className="task-field">
                    <div className="task_entery">
                        <label>Enter Task</label>
                        <input type="text" placeholder="Enter Task"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className="task_entery">
                        <label>Enter emoji</label>
                        <input type="text" placeholder="add emoji/work"
                            value={emoji}
                            onChange={(e) => setEmoji(e.target.value)}
                        />
                    </div>
                </div>
                <div className="task-field">
                    <div className="task_entery">
                        <label>Enter start Time</label>
                        <input type="time" placeholder="add emoji/work"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>
                    <div className="task_entery">
                        <label>Enter end Time</label>
                        <input type="time" placeholder="add emoji/work"
                         value={endTime}
                         onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>
                </div>

                <button type="submit" className="btn_form">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default form;
