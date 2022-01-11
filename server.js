const express = require('express');
const path = require('path');
const {
  fetchCryptoInfo,
  fetchExchangesData,
} = require('./controllers/crypto-controller');
const fetchNewsData = require('./controllers/cryptoNewsApi-controller');

const app = express();

const PORT = process.env.port || 8000;

//app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/news/search', fetchNewsData);

app.get('/api/coins', fetchCryptoInfo);

app.get('/api/exchanges', fetchExchangesData);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
