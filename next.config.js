const withImages = require('next-images');

const redirects = {
  async redirects() {
    return [
      {
        source: '/pool',
        destination: '/pool',
        permanent: true
      }
    ];
  }
};

module.exports = withImages(redirects);
