const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  // Get the Authorization header
  const authHeader = req.header("Authorization");

  console.log("Authorization Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.replace("Bearer ", "");
  console.log("Extracted Token:", token);

  try {
    // Verify the token using the secret from the environment variable
    const secret = process.env.ACCESS_SECRET_TOKEN;
    console.log("JWT Secret:", secret);

    const decoded = jwt.verify(token, secret);
    console.log("Decoded JWT Payload:", decoded);

    req.userId = decoded.userId;
    req.userEmail = decoded.userEmail;

    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);

    return res.status(401).json({ error: "Invalid token. Please try again" });
  }
}

module.exports = authMiddleware;
