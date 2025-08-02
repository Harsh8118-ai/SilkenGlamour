const authorizeAdmin = (req, res, next) => {
  try {
    console.log("Checking admin middleware. User:", req.user?.username, "Admin:", req.user?.isAdmin);

    if (!req.user || !req.user.isAdmin) {
      console.log("Access denied: not admin");
      return res.status(403).json({ message: "Access denied: Admins only." });
    }

    next();
  } catch (error) {
    console.error("Admin middleware error:", error);
    return res.status(500).json({ message: "Admin authorization failed.", error });
  }
};

module.exports = authorizeAdmin;
