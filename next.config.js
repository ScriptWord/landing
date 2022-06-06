const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
  },
};
//const nextConfig = { images: { domains: ['https://res.cloudinary.com','pbs.twimg.com'], loader: 'cloudinary', path: '', }, }
module.exports = withPlugins([], nextConfig);
