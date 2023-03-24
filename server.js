const express = require('express');
const {
  fetchCryptoInfo,
  fetchExchangesData,
  fetchCryptoDetailInfo,
  fetchCryptoHistory,
} = require('./controllers/crypto-controller');
const fetchNewsData = require('./controllers/cryptoNewsApi-controller');

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/api/news/search', fetchNewsData);

app.get('/api/coins', fetchCryptoInfo);

app.get('/api/coin/:id', fetchCryptoDetailInfo);

app.get('/api/coin/:id/history/:time', fetchCryptoHistory);

app.get('/api/exchanges', fetchExchangesData);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
