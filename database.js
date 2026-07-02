const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "..", "database", "users.json");

function loadUsers() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({}, null, 2));
    }

    return JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
}

function saveUsers(users) {
    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
}

function getUser(users, id) {
    if (!users[id]) {
        users[id] = {
            wallet: 1000,
            bank: 0,
            inventory: [],
            cooldowns: {},
            stats: {
                wins: 0,
                losses: 0
            }
        };
    }

    return users[id];
}

module.exports = {
    loadUsers,
    saveUsers,
    getUser
};
