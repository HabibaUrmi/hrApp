import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header appName="HR App" />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;

