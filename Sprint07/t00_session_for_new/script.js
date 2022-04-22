const express = require('express');
const router = express.Router();
// const session = require('express-session');

router.get('/', (req, res) => {
    if (req.session.sent){
        res.send(`<body>
                    <style>
                        form{
                            border: 2px solid gray;
                            padding: 20px;
                        }
                    </style>
                    <h1>Session for new</h1>
                        &nbsp;&nbsp;&nbsp;&nbsp; Real Name: <span>${req.session.cookie.Real_name}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Superhero Name: <span>${req.session.cookie.Superhero_name}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Age: <span>${req.session.cookie.age}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Information: <span>${req.session.cookie.info}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Photo: <span>${req.session.cookie.photo}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Power: <span>${req.session.cookie.Power}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Level: <span>${req.session.cookie.level}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Origin of Power: <span>${req.session.cookie.Origin_of_Power}</span><br><br>
                    <form action="" method="post">
                        <input type="submit" name="action" value="FORGET"></input> 
                    </form>
                </body>`);
    } else{
        res.sendFile(__dirname + '/index.html');
    }
});

router.post('/', (req, res) => { 
    console.log(Object.values(req.body))
    if(req.body.action == 'SEND'){
        req.session.cookie = new Object(req.body);
        req.session.sent = true;
        res.send(`<body>
                    <style>
                        form{
                            border: 2px solid gray;
                            padding: 20px;
                        }
                    </style>
                    <h1>Session for new</h1>
                        &nbsp;&nbsp;&nbsp;&nbsp; Real Name: <span>${req.session.cookie.Real_name}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Superhero Name: <span>${req.session.cookie.Superhero_name}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Age: <span>${req.session.cookie.age}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Information: <span>${req.session.cookie.info}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Photo: <span>${req.session.cookie.photo}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Power: <span>${req.session.cookie.Power}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Level: <span>${req.session.cookie.level}</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp; Origin of Power: <span>${req.session.cookie.Origin_of_Power}</span><br><br>
                    <form action="" method="post">
                        <input type="submit" name="action" value="FORGET"></input> 
                    </form>
                </body>`);

    } else if (req.body.action == 'CLEAR') {
        res.sendFile(__dirname + '/index.html');
    } else if (req.body.action == 'FORGET'){
        req.session.sent = false;
        res.sendFile(__dirname + '/index.html');
    }

});

module.exports = router;