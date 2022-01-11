const axios = require('axios').default;

const headers = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '103c4f49b6msh4e19359526c2f79p1ceb74jsn59cc64fc64a8',
};

const baseurl = 'https://coinranking1.p.rapidapi.com';

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
    res.setHeader('Access-Control-Allow-Origin', '*');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    sendErrorMessage(error, res);
  }
};

module.exports = { fetchCryptoInfo, fetchExchangesData };
