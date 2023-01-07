import { Outlet } from "react-router-dom";
const ShareOfficer = () => {
  return (
    <>
      <h2 style={{textAlign:"center",fontSize:"2rem",padding:"10px"}}>Our Teachers</h2>
      <Outlet />
    </>
  );
};
export default ShareOfficer;
