## Introduction 📝

Welcome to the **NestJS Cryptocurrency Explorer!**

The NestJS Cryptocurrency Explorer is a comprehensive API service that empowers users to access a wealth of information about cryptocurrencies, cryptocurrency news, and cryptocurrency exchanges. This application seamlessly integrates with the CoinRanking API for cryptocurrency data and the Bing News Search API for real-time cryptocurrency news. It also provides insights into cryptocurrency exchanges to keep users informed and up-to-date.

Built on the robust NestJS framework, the Cryptocurrency Explorer offers a range of RESTful endpoints, making it a versatile tool for developers, traders, and cryptocurrency enthusiasts. With this application, you can effortlessly access cryptocurrency data, stay updated with the latest news, and explore cryptocurrency exchanges—all in one place.

## Features 🌟

- **Cryptocurrency Information**: Retrieve detailed information about various cryptocurrencies, including their names, symbols, prices, market caps, and more. The Cryptocurrency Explorer offers flexible data limits, allowing you to customize the number of results you receive.

- **Cryptocurrency Details**: Get in-depth details about a specific cryptocurrency by providing its unique identifier, such as ID or symbol. This feature is perfect for users who need comprehensive data on specific cryptocurrencies.

- **Real-time News**: Stay informed about the cryptocurrency market with real-time news articles. The application fetches the latest news related to cryptocurrencies, ensuring you are up-to-date with developments and trends.

- **News Filtering**: Filter news articles by various criteria, including keywords, freshness, and text format. Customize your news feed to focus on the topics that matter most to you.

- **Cryptocurrency Exchanges**: Access information about cryptocurrency exchanges, including their names, locations, and more. Stay informed about the latest exchange data.

- **Access Control**: Secure access to the application's data with the use of access tokens. Protect your data and ensure that it's only accessible to authorized users.

- **Error Handling**: The application handles errors gracefully, providing informative error messages in case of any issues during data retrieval. You can rely on it for reliable and robust data access.

- **Logging**: Detailed logging ensures that you can monitor and troubleshoot the application effectively. Keep track of requests, responses, and any potential issues with ease.

The NestJS Cryptocurrency Explorer is a versatile and valuable tool for anyone interested in cryptocurrencies. Whether you're a developer building a crypto-related application, a trader making informed decisions, or an enthusiast staying up-to-date with the crypto world, this application has you covered. Dive into the world of cryptocurrencies effortlessly with the NestJS Cryptocurrency Explorer!

## Prerequisites 📋

Before you get started, make sure you have the following requirements in place:

- [npm](https://www.npmjs.com/) (v9.8.1) - Verify by running `npm --version` ✔️

## Setup ⚙️

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MathiasCK/cryptoverse_backend.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd cryptoverse_backend
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Configure env variables**

   On the root of the repo add a file called `.env` and add the credentials:

   ```bash
    PORT=8000 # Server port
    CLIENT_PORT=3000 # Client port
    NEWS_ACCESS_TOKEN=103c4f49b6msh4e19359526c2f79p1ceb74jsn59cc64fc64a8 # Your https://bing-news-search1.p.rapidapi.com access token
    COIN_ACCESS_TOKEN=YOUR_TOKEN # Your https://api.coinranking.com/v2 access token
   ```

## Running the Project 🚀

### Development Mode 🔧

1. **Start app**:

   ```bash
   npm run start:dev
   ```

The server will be accessible at http://localhost:8000

### Production Mode 🌐

1. **Build**:

   ```bash
   npm run build
   ```

2. **Start app**:

   ```bash
   npm run start:prod
   ```

The server will be accessible at http://localhost:8000

## Contributing 🤝

If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes with clear messages.
- Push your changes to your fork.
- Create a pull request to the main branch of the original repository.

## License 📄

This project is licensed under the MIT License.
