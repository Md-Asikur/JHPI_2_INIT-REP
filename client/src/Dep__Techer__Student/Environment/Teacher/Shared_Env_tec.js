import { Outlet } from "react-router-dom";
const ShareEnvTec = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", fontSize: "2rem", padding: "10px" }}>
        Environment Teacher
      </h2>
      <Outlet />
    </>
  );
};
export default ShareEnvTec;
