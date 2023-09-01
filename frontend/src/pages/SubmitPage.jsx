import { MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useAppState } from "../state";
const SubmitPage = () => {
  const {
    name,
    email,
    businessName,
    accountingProvider,
    establishedYear,
    loanAmount,
    setName: setAppStateName,
    setEmail: setAppStateEmail,
    setBusinessName: setAppStateBusinessName,
    setAccountingProvider: setAppStateAccountingProvider,
    setEstablishedYear: setAppStateEstablishedYear,
    setLoanAmount: setAppStateLoanAmount,
  } = useAppState();

  return (
    <>
      <div className="h1 text-center">Loan Application</div>

      <form>
        <MDBInput
          className="mb-4 w-50"
          type="text"
          id="form2Example1"
          label="Name"
          value={name}
          onChange={(e) => setAppStateName(e.target.value)}
        />
        <MDBInput
          className="mb-4 w-50"
          type="email"
          id="form2Example1"
          label="Email address"
          value={email}
          onChange={(e) => setAppStateEmail(e.target.value)}
        />
        <MDBInput
          className="mb-4 w-50 "
          type="text"
          id="form2Example2"
          label="Business Name"
          value={businessName}
          onChange={(e) => setAppStateBusinessName(e.target.value)}
        />
        <MDBInput
          className="mb-4 w-50 "
          type="text"
          id="form2Example2"
          label="Established Year"
          value={establishedYear}
          onChange={(e) => setAppStateEstablishedYear(e.target.value)}
        />
        <label className="p-2" htmlFor="select">
          Accounting Provider{" "}
        </label>
        <select
          className="mb-4 p-2 "
          label="Accounting Provider"
          value={accountingProvider}
          onChange={(e) => setAppStateAccountingProvider(e.target.value)}
        >
          <option defaultValue="Select Provider">Select Provider</option>
          <option value="1">Xero</option>
          <option value="2">MYOB</option>
        </select>
        <MDBInput
          className="mb-4 w-50 "
          type="text"
          id="form2Example2"
          label="Loan Amount"
          value={loanAmount}
          onChange={(e) => setAppStateLoanAmount(e.target.value)}
        />
        <Link className="details" to="/getdetails">
          Submit
        </Link>
      </form>
    </>
  );
};

export default SubmitPage;
