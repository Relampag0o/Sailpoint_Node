const express = require('express');
const router = express.Router();

let groups = [
    { name: 'Developer', role_id: 1 },
    { name: 'Human Resources', role_id: 2 },
    { name: 'Maintenance', role_id: 3 },
    { name: 'Sales', role_id: 4 },
    { name: 'Marketing', role_id: 5 },
    { name: 'IT', role_id: 6 },
    { name: 'Support', role_id: 7 },
    { name: 'Admin', role_id: 8 },
    { name: 'Finance', role_id: 9 },
    { name: 'Operations', role_id: 10 },
    { name: 'Logistics', role_id: 11 },
    { name: 'Procurement', role_id: 12 },
    { name: 'R&D', role_id: 13 },
    { name: 'Legal', role_id: 14 },
    { name: 'Compliance', role_id: 15 },
    { name: 'Customer Service', role_id: 16 }

];

router.get('/', (req, res) => {
    res.json(groups);
});

module.exports = router;
