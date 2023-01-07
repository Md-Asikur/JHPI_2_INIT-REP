import { Outlet } from "react-router-dom";
const ShareEnvStu = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
      Environment Student
      </h2>
      <Outlet />
    </>
  );
};
export default ShareEnvStu;
