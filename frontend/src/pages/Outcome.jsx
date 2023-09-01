import { useState } from "react";
import { useEffect } from "react";
import { useAppState } from "../state";
import Card from "../components/Card";
const Outcome = () => {
  const { businessName, establishedYear, loanAmount } = useAppState();
  const [outcome, setOutCome] = useState(null);
  console.log("Loan Amount", loanAmount);

  useEffect(() => {
    fetchOutcome();
  }, []);

  const fetchOutcome = async () => {
    try {
      const response = await fetch("http://localhost:5000/decision", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ businessName, establishedYear, loanAmount }),
      });

      if (response.ok) {
        const outcomeData = await response.json();
        setOutCome(outcomeData);
      } else {
        console.error("Failed to fetch outcome");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <>
      <h1>Loan Application Outcome</h1>
      <div>
        {outcome ? (
          <div>
            <Card outcome={outcome} />
          </div>
        ) : (
          <p>Loading outcome...</p>
        )}
      </div>
    </>
  );
};

export default Outcome;
