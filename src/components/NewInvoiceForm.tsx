import React, { useState } from 'react';
import './NewInvoiceForm.css';

const NewInvoiceForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    invoiceDate: '',
    dueDate: '',
    invoiceNumber: '',
    itemDescription: '',
    quantity: '',
    rate: '',
    tax: '',
    discount: '',
    notes: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (status: string) => {
    console.log('Submitted as', status, formData);
  };

  return (
    <div className="invoice-form">
      <h2>Create New Invoice</h2>
      <div className="invoice-form-container">
        <form>
          <div className="form-row">
            <label>Client Name</label>
            <div className="client-field">
              <select name="clientName" value={formData.clientName} onChange={handleChange}>
                <option value="">Client Name</option>
                <option value="Client A">Client A</option>
                <option value="Client B">Client B</option>
              </select>
              <button type="button" className="add-new">+ Add New</button>
            </div>
          </div>

          <div className="form-row">
            <label>Invoice Date</label>
            <input type="date" name="invoiceDate" value={formData.invoiceDate} onChange={handleChange} />

            <label>Due Date</label>
            <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Invoice Number</label>
            <input type="text" name="invoiceNumber" placeholder="Invoice number" value={formData.invoiceNumber} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Item Description</label>
            <input type="text" name="itemDescription" value={formData.itemDescription} onChange={handleChange} />

            <label>Quantity</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />

            <label>Rate</label>
            <input type="number" name="rate" value={formData.rate} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Tax (optional)</label>
            <input type="text" name="tax" value={formData.tax} onChange={handleChange} />

            <label>Discount (optional)</label>
            <input type="text" name="discount" value={formData.discount} onChange={handleChange} />
          </div>

          <div className="form-row">
            <label>Notes</label>
            <textarea name="notes" rows={3} value={formData.notes} onChange={handleChange} />
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => handleSubmit('draft')}>Save as Draft</button>
            <button type="button" className="primary" onClick={() => handleSubmit('send')}>Send Invoice</button>
            <button type="button" className="cancel" onClick={() => handleSubmit('cancel')}>Cancel</button>
          </div>
        </form>

        <div className="invoice-preview">
          <h3>Invoice</h3>
          <div className="preview-box">[Invoice preview placeholder]</div>
        </div>
      </div>
    </div>
  );
};

export default NewInvoiceForm;
