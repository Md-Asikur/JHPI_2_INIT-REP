import { Outlet } from "react-router-dom";
const ShareCmtStu = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
       Computer Student
      </h2>
      <Outlet />
    </>
  );
};
export default ShareCmtStu;
