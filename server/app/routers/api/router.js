const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const jokesRouter = require("./jokes/router");

router.use("/jokes", jokesRouter);

/* ************************************************************************* */

module.exports = router;
