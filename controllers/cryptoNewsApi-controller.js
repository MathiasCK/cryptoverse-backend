const axios = require('axios').default;

const fetchNewsData = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: {
        q: 'Cryptocurrency',
        freshness: 'Day',
        textFormat: 'Raw',
        safeSearch: 'Off',
        count: req.query.count,
      },
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '103c4f49b6msh4e19359526c2f79p1ceb74jsn59cc64fc64a8',
      },
    };

    const data = await (await axios(options)).data;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = fetchNewsData;
