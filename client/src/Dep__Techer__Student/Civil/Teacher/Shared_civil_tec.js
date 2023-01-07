import { Outlet } from "react-router-dom";
const ShareCivTec = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
       Civil Teacher
      </h2>
      <Outlet />
    </>
  );
};
export default ShareCivTec;
