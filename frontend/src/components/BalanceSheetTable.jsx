const BalanceSheetTable = ({ sheet }) => {
  // Convert the JSON object to an array of entries
  const sheetArray = Object.values(sheet);

  return (
    <table className="balance-sheet-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Month</th>
          <th>Profit/Loss</th>
          <th>Assets Value</th>
        </tr>
      </thead>
      <tbody>
        {sheetArray.map((entry, index) => (
          <tr key={index}>
            <td>{entry.year}</td>
            <td>{entry.month}</td>
            <td>{entry.profitOrLoss}</td>
            <td>{entry.assetsValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BalanceSheetTable;
