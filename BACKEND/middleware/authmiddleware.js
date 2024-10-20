const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // Get the Authorization header
  const authHeader = req.header('Authorization');
  
  // Log the Authorization header for debugging purposes
  console.log('Authorization Header:', authHeader);
  
  // Check if the header exists and is in the correct format (starts with "Bearer")
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  // Extract the token by removing the "Bearer " prefix
  const token = authHeader.replace('Bearer ', '');
  console.log('Extracted Token:', token); // Log the token for debugging

  try {
    // Verify the token using the secret from the environment variable
    const secret = process.env.ACCESS_SECRET_TOKEN;
    console.log('JWT Secret:', secret); // Log the secret (only for debugging, remove later)

    const decoded = jwt.verify(token, secret);
    console.log('Decoded JWT Payload:', decoded); // Log the decoded payload

    // Attach the userId from the decoded token to the request object
    req.userId = decoded.userId;
    req.userEmail = decoded.userEmail;
    
    // Move to the next middleware or route handler
    next();
  } catch (err) {
    // Log the error if token verification fails
    console.error('JWT Verification Error:', err.message);

    // Send an error response for invalid token
    return res.status(401).json({ error: 'Invalid token. Please try again' });
  }
}

module.exports = authMiddleware;
