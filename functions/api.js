const express =  require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();
const router = express.Router();
app.use(cors())

router.get('/users', cors(), (req, res) => {
    res.json(
        [
            {
                'id': '001',
                'name': 'Smith',
                'email': 'smith@sqnc.com'
            },
            {
                'id': '002',
                'name': 'Sam',
                'email': 'sam@sqnc.com'
            },
            {
                'id': '003',
                'name': 'lily',
                'email': 'lily@sqnc.com'
            }
        ]
    )
})

app.use('/users', router);
module.exports.handler = serverless(app);