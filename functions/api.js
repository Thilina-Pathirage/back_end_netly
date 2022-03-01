const express =  require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();
const router = express.Router();
app.use(cors())

router.get('/', cors(), (req, res) => {
    res.json(
        {
            "promotions": [
              {
                "promotionCode": "002",
                "promotionName": "New user promo",
                "promotionImageUrl": "www.google.com",
                "enabled": true
              }
            ],
            "highlightedFoodCategory": {
              "code": "0015",
              "isEnabled": true,
              "foodCategory": "BREAKFAST",
              "imageUrl": "www.accelr.com"
            }
          }
    )
})

app.use('/', router);
module.exports.handler = serverless(app);