import { Outlet } from "react-router-dom";
const ShareElcStu = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
       Electrical Student
      </h2>
      <Outlet />
    </>
  );
};
export default ShareElcStu;
