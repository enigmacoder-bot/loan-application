const Card = ({ outcome }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div>Status: {outcome.status}</div>
        <div>Approved Amount: {outcome.approvedAmount}</div>
      </div>
    </div>
  );
};

export default Card;
