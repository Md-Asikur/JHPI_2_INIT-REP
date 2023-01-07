import { Outlet } from "react-router-dom";
const ShareElectroStu = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
        Electronics Student
      </h2>
      <Outlet />
    </>
  );
};
export default ShareElectroStu;
