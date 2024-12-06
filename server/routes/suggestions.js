const express = require('express');
const trie = require('../trie'); // Import the Trie instance

const router = express.Router();

router.get('/', (req, res) => {
    const prefix = req.query.prefix || '';
    const suggestions = trie.searchPrefix(prefix.toLowerCase());
    res.json(suggestions);
});

module.exports = router;
