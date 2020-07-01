const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/signIn', (req, res) => {
  res.json('Sing In');
});

router.get('/signUp', async (req, res) => {
  const { email, password } = req.body;

  const account = await Account.findOne({ where: { email } });
  if (account) return res.jsonBadRequest(null, 'Account already exists');
  // const email = 'tst@tst.com';
  // const password = '123456';

  const hash = bcrypt.hashSync(password, saltRounds);

  const newAccount = await Account.create({
    email,
    password: hash,
  });

  // Account.create({ email: 'tst@tst.com', password: '123456' }).then().catch();

  // res.json('Sing Up');
  return res.jsonOK(newAccount, 'Account created !');
  // res.json({ email, password: hash });
});

module.exports = router;
