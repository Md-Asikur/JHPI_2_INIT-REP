import { Link } from "react-router-dom";
import products from "./Env_Tec_data";

const EnvironmentTeacher = () => {
  return (
    <>
      <div className="galleryWrapperTeacher">
        <div className="filterItemTeacher">
          <div className="galleryContainerTeacher">
            {products.map((product) => (
              <>
                <div key={product.id} className="galleryItemTeacher">
                  <img src={product.image} />
                  <div>
                    <h5> {product.name}</h5>
                    <Link to={`/environment/teachers/${product.id}`}>More Info</Link>
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

export default EnvironmentTeacher;
