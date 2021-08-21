const express = require('express');
const router = express.Router();
const moment = require('moment');

const Log = require('./../models/log')

router.get('/', async (req, res) => {
  try {
    const logs = await Log.find({});
    const dataAc = logs.map(log => moment(log.dataAction).format('DD/MM/YYYY HH:mm:ss'));
    res.json({ error: false, logs });
  } catch (error) {
    res.json({ error: true, message: error.message })
  }
});

module.exports = router;
