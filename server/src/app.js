console.log('hello')
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.post('/compare', (req, res) => {
  console.log(`me llego un requests de la direccion ${req.body.address}`)
  console.log('Will send req to Uber API')
  axios.get('https://api.uber.com/v1.2/estimates/price', {
    params: {
      start_latitude: '-33.325695',
      start_longitude: '-70.749696',
      end_latitude: '-33.55001070000001',
      end_longitude: '-70.6206791'
    },
    headers: {
      'Authorization': 'Token vRMkMVOQxNR3hpPazeTtR-8MFJCaXGDOOf2PwEyb'
    }
  })
  .then(function (response) {
    // console.log(response);
    const priceUberX = response.data.prices[0];
    console.log(priceUberX)
    res.send({
      message: `Quieres comparar los precios hacia la direccion ${req.body.address}`,
      prices: {
        uberX: priceUberX.estimate
      }
    });
  })
  .catch(function (error) {
    console.log(error);
  })
});

app.listen(process.env.PORT || 8081);
