const express = require('express');
const router = express.Router();
const chatboxController = require('../controllers/chatbox-controllers');

router.post('/', chatboxController.chatbox);

module.exports = router;