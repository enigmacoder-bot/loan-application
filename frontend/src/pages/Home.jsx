import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Welcome to the Loan Application</h1>
      <p>Click below to Initiate Loan Request.</p>
      <Link to="/submit">
        <MDBBtn type="button">Apply Loan</MDBBtn>
      </Link>
    </>
  );
};

export default Home;
