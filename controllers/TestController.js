
// Auto-generated by AutoPilot on 30-07-2023 at 18:52:17

const express = require('express');
const router = express.Router();

// Calculate the cube from number supplied in query param
router.get('/api/v1/humanDetails', (req, res) => {
    const number = req.query.number;
    if(number) {
        let result = Math.pow(number, 3);
        res.status(200).json({ result });
    } else {
        res.status(500).json({ error: 'Encountered an error' });
    }
});

module.exports = router;