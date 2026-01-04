import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InvoiceForm() {
  const navigate = useNavigate();

  const [invoiceNo, setInvoiceNo] = useState("");
  const [client, setClient] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!invoiceNo || !client || !date || !amount || !status) {
      alert("All fields are required");
      return;
    }

    await fetch("http://localhost:5000/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invoiceNo,
        client,
        date,
        amount,
        status,
      }),
    });

    alert("Invoice added successfully");
    navigate("/home");
  };

  return (
    <div>
      <h2>Add Invoice</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Invoice Number"
          value={invoiceNo}
          onChange={(e) => setInvoiceNo(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Client Name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
        <br /><br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br /><br />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
          <option value="Pending">Pending</option>
        </select>
        <br /><br />

        <button type="submit">Save Invoice</button>
      </form>
    </div>
  );
}

export default InvoiceForm;
