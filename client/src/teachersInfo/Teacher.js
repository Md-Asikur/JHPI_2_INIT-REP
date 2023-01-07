// import { Link } from "react-router-dom";
import products from "./data";
import "./teacher.css";
import { useEffect } from "react";
import { useStateValue } from "../ts_context/context/StateProvider";
const Teachers = () => {
  const [{ foodItems }, dispatch] = useStateValue();
 
  console.log(foodItems);
  return (
    <>
      <div className="galleryWrapperTeacher">
        <div className="filterItemTeacher">
          <div className="galleryContainerTeacher">
            {foodItems?.map((room) => (
              <>
                <div key={room.id} className="galleryItemTeacher">
                  <img src={room.imageURL} />
                  <div>
                    <h5> {room.title}</h5>
                    <a href={`/teachers/${room.id}`}>More Info</a>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
