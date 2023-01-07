import { Link, useParams } from "react-router-dom";
import products from "./Electrical_Stu_data";

const SingleElcStudent = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  const {
    image,
    name,
    post,
    email,
    phone,
    house,
    worksIn,
    worksAt,
    studietAt,
    join,
    tech,
    degree,
  } = product;
  return (
    <section className="section__product">
      <div className="details1">
        <img src={image} alt={name} className="image-img-fluid" />
      </div>
      <div className="details2">
        <h5>
          Name: <span> {name}</span>
        </h5>
        <h5>
          Post: <span> {post}</span>
        </h5>
        <h5>
          Depertment: <span> {tech}</span>
        </h5>
        <h5>
          Study: <span> {studietAt}</span>
        </h5>
        <h5>
          Degree: <span> {degree}</span>
        </h5>

        <h5>
          WorksIn: <span>{worksIn}</span>
        </h5>
        <h5>
          Join: <span>{join}</span>
        </h5>
        <h5>
          WorksAt: <span>{worksAt}</span>
        </h5>
        <h5>
          House: <span>{house}</span>
        </h5>
        <h5>
          Email: <span> {email}</span>
        </h5>
        <h5>
          Phone: <span>{phone}</span>
        </h5>
        <Link to="/civil/students">Back</Link>
      </div>
    </section>
  );
};

export default SingleElcStudent;
