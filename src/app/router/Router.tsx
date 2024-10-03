import { ProcedureList, NotFound, Contacts } from "@/pages";
import { FC, ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export enum PagesEnum {
  PROCEDURE = "/procedure",
  CONTACTS = "/contacts",
  NOT_FOUND = "*",
}

const AppRouterPages: Record<PagesEnum, ReactElement> = {
  [PagesEnum.NOT_FOUND]: <NotFound />,
  [PagesEnum.PROCEDURE]: <ProcedureList />,
  [PagesEnum.CONTACTS]: <Contacts />,
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
