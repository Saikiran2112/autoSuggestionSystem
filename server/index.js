const express = require('express');
const trie = require('./trie');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


app.get('/suggestions', (req, res) => {
    const prefix = req.query.prefix || '';
    const suggestions = trie.searchPrefix(prefix.toLowerCase());
    res.json(suggestions);
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
