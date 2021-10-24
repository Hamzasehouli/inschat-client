const express = require('express');
const Conversation = require('../models/ConversationModel');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newConversation = await Conversation.create({
      members: [req.body.senderId, req.body.receiverId],
    });
    res.status(200).json(newConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get conv includes two userId

router.get('/find/:firstUserId/:secondUserId', async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
