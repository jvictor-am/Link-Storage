const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');
const { accountSignUp } = require('../validators/account');
const { getMessage } = require('../helpers/messages');

const router = express.Router();

const saltRounds = 10;

router.get('/signIn', (req, res) => {
  res.jsonOK(null);
});

router.get('/signUp', accountSignUp, async (req, res) => {
  const { email, password } = req.body;

  const account = await Account.findOne({ where: { email } });
  // if (account) return res.jsonBadRequest(null, 'Account already exists');
  if (account)
    return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));
  // const email = 'tst@tst.com';
  // const password = '123456';

  const hash = bcrypt.hashSync(password, saltRounds);

  const newAccount = await Account.create({
    email,
    password: hash,
  });

  // Account.create({ email: 'tst@tst.com', password: '123456' }).then().catch();

  // res.json('Sing Up');
  // return res.jsonOK(newAccount, 'Account created !');
  return res.jsonOK(newAccount, getMessage('account.signup.success'));
  // res.json({ email, password: hash });
});

module.exports = router;
