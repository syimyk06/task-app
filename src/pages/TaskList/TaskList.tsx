import { type FC } from "react";
import style from "./TaskList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import TaskItem from "@/components/TaskItem/TaskItem";

export interface TaskListProps {}

const TaskList: FC<TaskListProps> = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <>
      <div className={style.tasks}>
        <div className={style.tasksBlock}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
          {tasks.length == 0 ? <>Empty task list</> : <></>}
        </div>
      </div>
    </>
  );
};

export default TaskList;
