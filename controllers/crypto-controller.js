const axios = require('axios').default;

const headers = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'f9d9392af9mshb30ff33ac02fd96p1c45dfjsn55cbc01be625',
};

const baseurl = 'https://coinranking1.p.rapidapi.com';
const localhost = 'http://localhost:3000';

const sendErrorMessage = (error, res) =>
  res.status(500).json({ message: error.message });

const fetchCryptoInfo = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: `${baseurl}/coins`,
      params: {
        limit: req.query.limit,
      },
      headers,
    };

    const data = await (await axios(options)).data;
    res.setHeader('Access-Control-Allow-Origin', localhost);
    res.json(data);
  } catch (error) {
    sendErrorMessage(error, res);
  }
};

const fetchCryptoDetailInfo = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: `${baseurl}/coin/${req.params.id}`,
      headers,
    };

    const data = await (await axios(options)).data;
    res.setHeader('Access-Control-Allow-Origin', localhost);
    res.json(data);
  } catch (error) {
    sendErrorMessage(error, res);
  }
};

const fetchCryptoHistory = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: `${baseurl}/coin/${req.params.id}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${req.params.time}`,
      headers,
    };

    const data = await (await axios(options)).data;
    res.setHeader('Access-Control-Allow-Origin', localhost);
    res.json(data);
  } catch (error) {
    sendErrorMessage(error, res);
  }
};

const fetchExchangesData = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: `${baseurl}/exchanges`,
      headers,
    };

    const data = await (await axios(options)).data;
    res.setHeader('Access-Control-Allow-Origin', localhost);
    res.json(data);
  } catch (error) {
    sendErrorMessage(error, res);
  }
};

module.exports = {
  fetchCryptoInfo,
  fetchExchangesData,
  fetchCryptoDetailInfo,
  fetchCryptoHistory,
};
