const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// ===== Routes =====

// Health check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running 🚀",
    });
});

// GET API
app.get("/api/users", (req, res) => {
    res.json({
        success: true,
        data: [
            { id: 1, name: "Ayush" },
            { id: 2, name: "John" },
        ],
    });
});

// GET by id
app.get("/api/users/:id", (req, res) => {
    const { id } = req.params;

    res.json({
        success: true,
        message: `User with id ${id}`,
    });
});

// POST API
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: { name, email },
    });
});

// PUT API
app.put("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;

    res.json({
        success: true,
        message: `User ${id} updated`,
        data: body,
    });
});

// DELETE API
app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;

    res.json({
        success: true,
        message: `User ${id} deleted`,
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
