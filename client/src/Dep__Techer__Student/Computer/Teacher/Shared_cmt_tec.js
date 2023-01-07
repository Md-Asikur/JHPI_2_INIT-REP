import { Outlet } from "react-router-dom";
const ShareCmtTec = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
       Computer Teacher
      </h2>
      <Outlet />
    </>
  );
};
export default ShareCmtTec;
