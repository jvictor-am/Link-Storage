const express = require('express');
const router = express.Router();

router.get('/signIn', (req, res) => {
  res.json('Sing In');
});

router.get('/signUp', (req, res) => {
  res.json('Sing Up');
});

module.exports = router;
