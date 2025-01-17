import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState(null); // Initialize as null
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch user info and case data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users"); // Replace with your dynamic user ID if needed
        if (!response.ok) throw new Error("Failed to fetch user info");
        const data = await response.json();
        
        // Assuming you want the first user in the array, update accordingly
        if (data && data.length > 0) {
          setUserInfo(data[0]); // Update with the correct user from the array
        }
      } catch (error) {
        console.error("Error fetching user info:", error.message);
      }
    };

    const fetchCaseData = async () => {
      try {
        const response = await fetch("http://localhost:5000/cases"); // Fetch cases from the correct API
        if (!response.ok) throw new Error("Failed to fetch case data");
        const caseData = await response.json();
        setCases(caseData); // Set the fetched cases into state
        setLoading(false); // Stop loading after data is fetched
      } catch (error) {
        console.error("Error fetching case data:", error.message);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchUserData();
    fetchCaseData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isUserLoggedIn"); // Clear login state
    navigate("/login"); // Redirect to login
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Placeholder for sending message to admin
      console.log("Message sent to admin:", message);
      alert("Your message has been sent!");
      setMessage("");
    } else {
      alert("Please enter a message before sending.");
    }
  };

  return (
    <div className="user-dashboard">
      <header>
        <h1>User Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <main>
        <section className="dashboard-section">
          <h2>User Information</h2>
          {userInfo ? (
            <>
              <p><strong>Name:</strong> {userInfo.name}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Phone:</strong> {userInfo.phone || "N/A"}</p>
            </>
          ) : (
            <p>Loading user information...</p>
          )}
        </section>

        <section className="dashboard-section">
          <h2>Case Information Overview</h2>
          {loading ? (
            <p>Loading cases...</p>
          ) : (
            <ul>
              {cases.length > 0 ? (
                cases.map((caseItem) => (
                  <li key={caseItem.id}>
                    <h3>{caseItem.clientname}</h3>
                    <p><strong>Description:</strong> {caseItem.description}</p>
                    <p><strong>Status:</strong> {caseItem.status}</p>
                    <p><strong>Created At:</strong> {new Date(caseItem.createdAt).toLocaleDateString()}</p>
                    <button onClick={() => navigate(`/case/${caseItem.id}`)}>View Case Details</button>
                  </li>
                ))
              ) : (
                <p>No cases found.</p>
              )}
            </ul>
          )}
        </section>

        <section className="dashboard-section">
          <h2>Appointment Scheduling</h2>
          <p>Book meetings with your lawyer or admin.</p>
        </section>

        <section className="dashboard-section">
          <h2>Send Information to Admin</h2>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            rows="5"
          ></textarea>
          <button className="send-btn" onClick={handleSendMessage}>
            Send Message
          </button>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
