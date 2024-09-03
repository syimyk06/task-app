import { type FC } from "react";
import { AppRouter } from "@/app/router";
import Header from "@/components/Header/Header";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <>
      <div className="app">
        <Header />
        <AppRouter />
      </div>
    </>
  );
};
