const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
  };
};

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'ui_auth_ssr',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        exposes: {
          // './title': './components/exposedTitle.js',
          "./Home": "./pages/index.js",
        },
        shared: {
          // whatever else
        },
        // Required for static import of remotes
        extraOptions: {
          automaticAsyncBoundary: true
        }
      })
    );
    return config;
  },
};