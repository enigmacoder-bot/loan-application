import express from "express";
import cors from "cors";
import data from "./data.js";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/accounting-software", (req, res) => {
  res.json(data);
});

// decision engine
app.post("/decision-engine", (req, res) => {
  const outcome = {
    status: "Approved",
    approvedAmount: (req.body.loanAmount * req.body.preAssesment) / 100,
  };
  res.json(outcome);
});

app.post("/backend", async (req, res) => {
  let totalProfit = 0;
  for (let i = 0; i < data.length; i++) {
    totalProfit += data[i].profitOrLoss;
  }
  let totalAssetValue = 0;
  let averageAssetOf12Months = 0;

  for (let j = 0; j < data.length; j++) {
    totalAssetValue += data[j].assetsValue;
  }

  averageAssetOf12Months = totalAssetValue / 12;

  let preAssesment = 20;

  if (totalAssetValue > req.body.loanAmount) {
    preAssesment = 100;
  } else if (totalProfit > 0) {
    preAssesment = 60;
  }

  //   Annual Summary
  const annualSummary = data.reduce((acc, entry) => {
    {
      const key = entry["year"];
      acc[key] ??= 0;
      acc[key] += entry["profitOrLoss"];
      return acc;
    }
  });

  const dataToDecisionEngine = {
    businessName: req.body.businessName,
    yearEstablished: req.body.yearEstablished,
    annualSummary,
    loanAmount: req.body.loanAmount,
    preAssesment: preAssesment,
  };

  // Sending data to decision engine

  const decisionEngineResponse = await fetch(
    "http://localhost:5000/decision-engine",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToDecisionEngine),
    }
  );

  if (decisionEngineResponse.ok) {
    const decisionData = await decisionEngineResponse.json();
    res.json(decisionData);
  } else {
    console.error("Failed to send data to decision-engine API");
    res.status(500).json({ error: "Failed to send data to decision-engine" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
