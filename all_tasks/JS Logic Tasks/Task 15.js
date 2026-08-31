/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map(); // insertion order = recency order (oldest first)
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;

    const value = this.map.get(key);
    // mark as most recently used: remove and re-insert
    this.map.delete(key);
    this.map.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.map.delete(key); // remove old position so re-insert puts it at the end
    } else if (this.map.size >= this.capacity) {
        // evict least recently used = first key in insertion order
        const lruKey = this.map.keys().next().value;
        this.map.delete(lruKey);
    }
    this.map.set(key, value);
};