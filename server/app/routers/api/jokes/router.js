const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import joke-related actions
const { browse, read, add } = require("../../../controllers/jokeActions");

// Route to get a list of jokes
router.get("/", browse);

// Route to get a specific joke by ID
router.get("/:id", read);

// Route to add a new joke
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
