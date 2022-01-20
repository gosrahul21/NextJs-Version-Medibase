module.exports = {
  reactStrictMode: true,
  images:{
    domains:[
      'images.unsplash.com',
       'pngimg.com'
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  }
}
