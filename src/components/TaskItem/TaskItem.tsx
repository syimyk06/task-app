import { type FC } from "react";
import style from "./TaskItem.module.scss";
import { useDispatch } from "react-redux";
import { ITask, removeTask, toggleTask } from "@/api/task/taskSlice";

export interface TaskItemProps {
  task: ITask;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(removeTask({ id: task.id }));
  };

  const makeTaskAsToggled = () => {
    dispatch(toggleTask({ id: task.id }));
  };

  return (
    <>
      <div className={style.card}>
        <p className="card-desc">{task.description}</p>

        <div>
          <input
            type="checkbox"
            checked={task.toggled}
            onChange={makeTaskAsToggled}
          />
          {task.toggled ? " (Resolved)" : " (Unresolved)"}
        </div>

        <button onClick={deleteTask} className="card-delete">
          Delete
        </button>
      </div>
    </>
  );
};

export default TaskItem;
