import React, { useState } from 'react';
import './DocumentUpload.css';

const DocumentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentName, setDocumentName] = useState(''); // State for document name
  const [clientName, setClientName] = useState(''); // State for client name

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setDocumentName(e.target.value);
  };

  const handleClientChange = (e) => {
    setClientName(e.target.value); // Set the client name state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile || !documentName || !clientName) {
      console.error('File, document name, and client name are required');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('documentName', documentName);  // Send document name
    formData.append('clientname', clientName);      // Send client name

    fetch('http://localhost:5000/documents', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log('Upload successful:', data))
      .catch((error) => console.error('Upload failed:', error));

    // Clear form fields
    setDocumentName('');  // Reset the document name
    setSelectedFile(null);  // Reset the selected file
    setClientName('');      // Reset the client name
  };

  return (
    <div className="document-upload-container">
      <h2>Upload Documents</h2>
      <form className="document-form" onSubmit={handleSubmit}>
        <label>
          Document Name:
          <input
            type="text"
            value={documentName}
            onChange={handleNameChange}
            placeholder="Enter document name"
            required
          />
        </label>
        <label>
          Client Name:
          <input
            type="text"
            value={clientName}
            onChange={handleClientChange} // Handle the client name input
            placeholder="Enter client name"
            required
          />
        </label>
        <label>
          Select File:
          <input type="file" onChange={handleFileChange} required />
        </label>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default DocumentUpload;
