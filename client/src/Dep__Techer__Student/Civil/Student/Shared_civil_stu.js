import { Outlet } from "react-router-dom";
const ShareCivStu = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
       Civil Student
      </h2>
      <Outlet />
    </>
  );
};
export default ShareCivStu;
