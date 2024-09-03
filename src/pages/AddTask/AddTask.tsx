import { useState, type FC } from "react";
import style from "./AddTask.module.scss";
import { useDispatch } from "react-redux";
import { addTask } from "@/api/task/taskSlice";

export interface AddTaskProps {}

const AddTask: FC<AddTaskProps> = () => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const addCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
    
    setError(taskName.length <= 3);
  };

  const pushCard = () => {
    if (taskName.length > 3) {
      dispatch(addTask({ description: taskName }));
      setTaskName("");
    }

	setError(taskName.length <= 3);
  };

  return (
    <>
      <div className={style.addTask}>
        <div className={style.form}>
          <input
            onChange={addCard}
            className={style.input}
            type="text"
            value={taskName}
          />
          <button onClick={pushCard} className={style.button}>
            Add task
          </button>
          {error ? <p className={style.error}>You need write more than 3 sumbols</p> : <></>}
        </div>
      </div>
    </>
  );
};

export default AddTask;
