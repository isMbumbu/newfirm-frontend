// src/utils/caseService.js
const API_URL = "http://localhost:5000/cases"; // Your backend URL

// Fetch existing cases
export const fetchCases = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch cases");
    }
    return await response.json(); // Parse and return the JSON data
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
};

// src/utils/caseService.js
export const createCase = async (caseData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(caseData), // Convert the caseData to JSON
    });

    if (!response.ok) {
      const errorText = await response.text();  // Capture error message from response
      throw new Error(`Failed to create case: ${errorText}`);
    }

    return await response.json(); // Return the created case from the response
  } catch (error) {
    console.error('Error in createCase function:', error); // Log detailed error
    return null; // Return null if there's an error
  }
};
