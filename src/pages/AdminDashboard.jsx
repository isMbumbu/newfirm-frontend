import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CaseDetails from "../CaseManagement/CaseDetails";
import DocumentUpload from "../CaseManagement/DocumentUpload";
import TaskList from "../CaseManagement/TaskList";
import UserManagement from "./UserManagement";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  // Fetch documents from API dynamically
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch("http://localhost:5000/documents");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDocuments(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Show the button when scrolling down
    const handleScroll = () => {
      if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };

    // Scroll to the top when the button is clicked
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    backToTopBtn.addEventListener("click", scrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      backToTopBtn.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <div className="admin-dashboard">
      <header className="header">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar">
          <ul>
            <li><a href="#case-management">Case Management</a></li>
            <li><a href="#document-upload">Document Upload</a></li>
            <li><a href="#uploaded-documents">Uploaded Documents</a></li>
            <li><a href="#task-list">Task List</a></li>
            <li><a href="#user-management">User Management</a></li>
          </ul>
        </aside>
        <main className="main-content">
          <button id="backToTopBtn" className="back-to-top-btn">↑</button>

          <section id="case-management" className="dashboard-section">
            <h2>Case Management</h2>
            <CaseDetails />
          </section>
          <section id="document-upload" className="dashboard-section">
            <h2>Document Upload</h2>
            <DocumentUpload />
          </section>
          <section id="uploaded-documents" className="dashboard-section">
            <h2>Uploaded Documents</h2>
            {error ? (
              <p style={{ color: "red" }}>Error: {error}</p>
            ) : loading ? (
              <div className="spinner">
                <p>Loading documents...</p>
              </div>
            ) : documents.length > 0 ? (
              <div>
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    style={{
                      border: "1px solid #ddd",
                      margin: "10px 0",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <h3>{doc.name}</h3>
                    <p>
                      <strong>Client Name:</strong> {doc.clientname}
                    </p>
                    <p>
                      <strong>Uploaded At:</strong>{" "}
                      {new Date(doc.uploaded_at).toLocaleString()}
                    </p>
                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      View Document
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p>No documents available.</p>
            )}
          </section>
          <section id="task-list" className="dashboard-section">
            
            <TaskList />
          </section>
          <section id="user-management" className="dashboard-section">
            <h2>User Management</h2>
            <UserManagement />
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
