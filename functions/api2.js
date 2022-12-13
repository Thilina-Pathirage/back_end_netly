const express =  require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();
const router = express.Router();
app.use(cors())

router.get('/events', cors(), (req, res) => {
    res.json(
        [
            {
                "eventID": 1,
                "eventName": "Green Fiesta",
                "date": "2022-12-15T17:00:00"
              },
              {
                "eventID": 2,
                "eventName": "Praana",
                "date": "2022-12-11T17:00:00"
              },
              {
                "eventID": 3,
                "eventName": "SFD - Software Freedom Day",
                "date": "2022-12-15T17:00:00"
              }
        ]
    )
})

app.use('/events', router);
module.exports.handler = serverless(app);