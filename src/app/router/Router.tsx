import { AddTask, TaskList, NotFound } from "@/pages";
import { FC, ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export enum PagesEnum {
  ADD_TASK = "/addTask",
  TASKS = "/",
  NOT_FOUND = "*",
}

const AppRouterPages: Record<PagesEnum, ReactElement> = {
  [PagesEnum.ADD_TASK]: <AddTask />,
  [PagesEnum.NOT_FOUND]: <NotFound />,
  [PagesEnum.TASKS]: <TaskList />,
};

interface AppRouterProps {}
export const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <Routes>
        {Object.entries(AppRouterPages).map(([path, element]) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
