const express = require('express');
const router = express.Router();

let users = [
    { id: 1, username: 'Alvaro', email: 'alvaro@stemdo.io', role_id: 1 },
    { id: 2, username: 'Jose', email: 'jose@stemdo.io', role_id: 1 },
    { id: 3, username: 'Raul', email: 'raul@stemdo.io', role_id: 2 },
    { id: 4, username: 'Jonathan', email: 'jonathan@stemdo.io', role_id: 2 },
    { id: 5, username: 'Sergio', email: 'sergio@stemdo.io', role_id: 3 },
    { id: 6, username: 'Marco', email: 'marco@stemdo.io', role_id: 3 },
    { id: 7, username: 'grace', email: 'grace@example.com', role_id: 4 },
    { id: 8, username: 'heidi', email: 'heidi@example.com', role_id: 4 },
    { id: 9, username: 'ivan', email: 'ivan@example.com', role_id: 5 },
    { id: 10, username: 'judy', email: 'judy@example.com', role_id: 5 },
    { id: 11, username: 'mallory', email: 'mallory@example.com', role_id: 6 },
    { id: 12, username: 'nancy', email: 'nancy@example.com', role_id: 6 },
    { id: 13, username: 'oscar', email: 'oscar@example.com', role_id: 7 },
    { id: 14, username: 'peggy', email: 'peggy@example.com', role_id: 7 },
    { id: 15, username: 'trent', email: 'trent@example.com', role_id: 8 },
    { id: 16, username: 'victor', email: 'victor@example.com', role_id: 8 },
    { id: 17, username: 'walter', email: 'walter@example.com', role_id: 9 },
    { id: 18, username: 'xander', email: 'xander@example.com', role_id: 9 },
    { id: 19, username: 'yolanda', email: 'yolanda@example.com', role_id: 10 },
    { id: 20, username: 'zara', email: 'zara@example.com', role_id: 10 },
    { id: 21, username: 'Alfonso', email: 'alfonso@stemdo.io', role_id: 10 },
    { id: 22, username: 'Carroza', email: 'carroza@stemdo.io', role_id: 5 },

];

router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;
