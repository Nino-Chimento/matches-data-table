import { FC } from "react";
import NavBar from "./navBar";

const Main: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Main;
