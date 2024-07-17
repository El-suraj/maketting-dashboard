/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /index\.html$/,
        use: 'ignore-loader',
      });
      return config;
    },
  };