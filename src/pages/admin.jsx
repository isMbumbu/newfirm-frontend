import React from 'react';
import CaseDetails from '../CaseManagement/CaseDetails'; // Import the CaseDetails component
import DocumentUpload from '../CaseManagement/DocumentUpload'; // Import the DocumentUpload component
import TaskList from '../CaseManagement/TaskList'; // Import the TaskList component
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <main>
        <section className="dashboard-section">
          <h2>Case Management</h2>
          <CaseDetails />
        </section>
        <section className="dashboard-section">
          <h2>Document Upload</h2>
          <DocumentUpload />
        </section>
        <section className="dashboard-section">
          <h2>Task List</h2>
          <TaskList />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
