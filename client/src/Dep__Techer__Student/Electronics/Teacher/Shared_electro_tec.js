import { Outlet } from "react-router-dom";
const ShareElectroTec = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
        Electronics Teacher
      </h2>
      <Outlet />
    </>
  );
};
export default ShareElectroTec;
