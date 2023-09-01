import { useState, useEffect } from "react";
import BalanceSheetTable from "../components/BalanceSheetTable";
import { Link, useNavigate } from "react-router-dom";

const GetDetails = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:5000/accounting-software")
        .then((res) => res.json())
        .then((data) => setApiData(data));
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Balance Sheet Data</h1>
      <BalanceSheetTable sheet={apiData} />

      <Link
        to="/outcome"
        className="details"
        state={{ test: "test" }}
        onClick={(e) => {
          e.preventDefault();
          navigate("/outcome");
        }}
      >
        Submit Application
      </Link>
    </div>
  );
};
export default GetDetails;
