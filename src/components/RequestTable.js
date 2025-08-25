import React, { useState, useEffect } from "react";
import axios from "axios";

function RequestTable() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // فعلا نمونه تستی – بعدا به API اسپرینگ وصل میشه
    setRequests([
      { id: 1, title: "Buy Pump", status: "Estimation", days: 12 },
      { id: 2, title: "Purchase Valve", status: "Manager Review", days: 7 },
    ]);
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
          <th>Days in Stage</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((req) => (
          <tr key={req.id}>
            <td>{req.id}</td>
            <td>{req.title}</td>
            <td>{req.status}</td>
            <td>{req.days}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RequestTable;
