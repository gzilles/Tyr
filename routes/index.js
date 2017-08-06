const express = require('express');
const router =  express.Router();

router.get("/", (req,res) =>
{
    res.send({response: "I'm alive!"}).statusCode(200);
});

module.exports = router;