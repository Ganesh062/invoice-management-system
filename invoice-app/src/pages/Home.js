import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);

  // Fetch invoices from backend
  const fetchInvoices = async () => {
    const res = await fetch("http://localhost:5000/invoices");
    const data = await res.json();
    setInvoices(data);
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  // Delete invoice
  const deleteInvoice = async (id) => {
    await fetch(`http://localhost:5000/invoices/${id}`, {
      method: "DELETE",
    });
    fetchInvoices();
  };

  return (
    <div>
      <h2>Invoices</h2>

      <button onClick={() => navigate("/invoice")}>
        Add Invoice
      </button>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Invoice No</th>
            <th>Client</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id}>
              <td>{inv.invoiceNo}</td>
              <td>{inv.client}</td>
              <td>{inv.date}</td>
              <td>{inv.amount}</td>
              <td>{inv.status}</td>
              <td>
                <button onClick={() => deleteInvoice(inv.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
