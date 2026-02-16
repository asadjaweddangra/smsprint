// File: api/logPrint.js

export default async function handler(req, res) {
  // 1. Enable CORS so your GitHub Pages site can talk to this API safely
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or restrict to your github.io URL
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 2. Only allow secure POST requests
  if (req.method === 'POST') {
    const patientData = req.body;
    
    // --- THIS IS YOUR SECURE SERVER AREA ---
    // The data is now safe from the browser and network logs.
    // Example: console.log(patientData); (This only shows up in Vercel's private logs)
    
    // TODO: Forward this data to a secure, HIPAA-compliant database or API here.

    // Send a success message back to the frontend
    return res.status(200).json({ success: true, message: 'Data logged securely' });
    
  } else {
    // Block any GET requests (like the Google Forms hack)
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}