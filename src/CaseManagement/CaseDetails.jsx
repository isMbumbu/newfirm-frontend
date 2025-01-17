import React, { useState, useEffect } from 'react';
import { fetchCases, createCase } from "../../src/utils/caseService";
import './CaseDetails.css';

const CaseDetails = () => {
  const [cases, setCases] = useState([]);
  const [newCase, setNewCase] = useState({
    clientname: '',
    description: '',
    status: 'Open',
  });

  useEffect(() => {
    const getCases = async () => {
      const data = await fetchCases();
      console.log(data); // Check if data is fetched properly
      setCases(data || []); // Handle null or undefined data
    };
  
    getCases();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newCase.clientname || !newCase.description) {
      alert("Please fill out all fields");
      return;
    }
    const caseData = await createCase(newCase);
    if (caseData) {
      setCases((prevCases) => [...prevCases, caseData]);
    }
    setNewCase({ clientname: '', description: '', status: 'Open' });
  };

  // Delete a case by ID
  const deleteCase = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/cases/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCases(cases.filter((caseItem) => caseItem.id !== id));
        alert("Case deleted successfully!");
      } else {
        const data = await response.json();
        alert(data.error || "Error deleting the case.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="case-details-container">
      <h1>Case Details</h1>

      <form className="case-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Client Name"
          value={newCase.clientname}
          onChange={(e) => setNewCase({ ...newCase, clientname: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={newCase.description}
          onChange={(e) => setNewCase({ ...newCase, description: e.target.value })}
          required
        />
        <select
          value={newCase.status}
          onChange={(e) => setNewCase({ ...newCase, status: e.target.value })}
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
        <button type="submit">Add Case</button>
      </form>

      <h2>Existing Cases</h2>
      <ul className="case-list">
        {cases.map((caseItem) => (
          <li key={caseItem.id} className="case-item">
            <strong>{caseItem.clientname}</strong> - {caseItem.status}
            <button onClick={() => deleteCase(caseItem.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseDetails;
