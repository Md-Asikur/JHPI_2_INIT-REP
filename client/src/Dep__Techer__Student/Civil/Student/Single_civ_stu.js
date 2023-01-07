import { Link, useParams } from "react-router-dom";
import products from "./Civ_Stu_data";

const SingleCivStudent = () => {
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
    roll,
    reg,
    session,
    birthday,
    blood,
    FathersName,
    MothersName,
    Shift,
    Semester,
    preAdd,
    parAdd
  
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
          Father's Name: <span> {FathersName}</span>
        </h5>
        <h5>
          Mother's Name: <span> {MothersName}</span>
        </h5>
        <h5>
          Date of Birth: <span> {birthday}</span>
        </h5>
        <h5>
          Board Roll: <span> {roll}</span>
        </h5>
        <h5>
          Registration No: <span> {reg}</span>
        </h5>
        <h5>
          Session: <span> {session}</span>
        </h5>
        <h5>
          Semester: <span> {Semester}</span>
        </h5>
        <h5>
          Shift: <span> {Shift}</span>
        </h5>
        <h5>
          Blood Group: <span> {blood}</span>
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
         Present Address: <span>{preAdd}</span>
        </h5>
        <h5>
          Parmanent Address: <span>{parAdd}</span>
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

export default SingleCivStudent;
