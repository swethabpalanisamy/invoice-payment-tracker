import React, { useState } from 'react';
import './MainDashboard.css';
import NewInvoiceForm from './NewInvoiceForm';

const invoices = [
  { id: '#1001', client: 'Smith Consulting', dueDate: '9/15/2023', status: 'Paid' },
  { id: '#1000', client: 'Johnson LLC', dueDate: '9/10/2023', status: 'Paid' },
  { id: '#0999', client: 'Acme Corp', dueDate: '8/25/2023', status: 'Pending' },
  { id: '#0998', client: 'Doe Industries', dueDate: '8/20/2023', status: 'Overdue' },
];

const MainDashboard = () => {
const [openNewInvoice,setNewInvoice]=useState(false)
  const callNewInvoiceForm=()=>{
    setNewInvoice(true)
  }
  return (
    <>
   {!openNewInvoice ?(
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul className="nav-links">
          <li>Invoices</li>
          <li>Clients</li>
          <li>Reports</li>
        </ul>
        <button className="new-invoice" onClick={()=>callNewInvoiceForm()}>+ New Invoice</button>
      </aside>

      <main className="main">
        <h1>Dashboard</h1>
        <div className="summary">
          <div className="card">
            <p>Total Income</p>
            <h2>$12,750</h2>
          </div>
          <div className="card">
            <p>Pending</p>
            <h2>$3,200</h2>
          </div>
          <div className="card">
            <p>Overdue</p>
            <h2>$1,500</h2>
          </div>
        </div>

        <section className="income-section">
          <h3>Income</h3>
          <div className="graph-placeholder">📈 Graph Placeholder</div>
        </section>

        <section className="recent-invoices">
          <h3>Recent Invoices</h3>
          <table>
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Client</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.client}</td>
                  <td>{invoice.dueDate}</td>
                  <td>
                    <span className={`status ${invoice.status.toLowerCase()}`}>
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>):(<NewInvoiceForm/>)}</>
  );
};

export default MainDashboard;
