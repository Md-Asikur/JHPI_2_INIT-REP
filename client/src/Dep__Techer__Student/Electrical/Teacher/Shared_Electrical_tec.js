import { Outlet } from "react-router-dom";
const ShareElcTec = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
      Electrical Teacher
      </h2>
      <Outlet />
    </>
  );
};
export default ShareElcTec;
