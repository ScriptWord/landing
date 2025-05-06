const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['res.cloudinary.com'],
    //disableStaticImages: true,
    loader: 'custom',
    //path: 'https://res.cloudinary.com/scriptword/image/upload/v1654574659/'
  },
  // Add this to support static exports
  trailingSlash: true,
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      // Add other routes as needed
    };
  },
};

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false,
      },
    ],
  ],
  nextConfig
);

//const nextConfig = { images: { domains: ['https://res.cloudinary.com','pbs.twimg.com'], loader: 'cloudinary', path: '', }, }
module.exports = config; // Use the correctly composed config
