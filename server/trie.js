class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    searchPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }
        return this.collectWords(node, prefix);
    }

    collectWords(node, prefix) {
        let words = [];
        if (node.isEndOfWord) words.push(prefix);
        for (let char in node.children) {
            words = words.concat(this.collectWords(node.children[char], prefix + char));
        }
        return words;
    }
}

const trie = new Trie();

// Insert words into the Trie
['apple', 'apricot', 'banana', 'berry', 'blueberry', 'blackberry'].forEach(word => trie.insert(word));

module.exports = trie;
