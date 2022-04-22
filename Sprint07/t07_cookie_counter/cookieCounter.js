const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if(!req.session.viewCount){
        req.session.viewCount = 1;
    } else {
        req.session.viewCount += 1;
    }
    // setInterval( () => {
    //     req.session.viewCount = 0;
    // }, 60000);

    res.render('index', {viewCount: req.session.viewCount});
})


module.exports = router;