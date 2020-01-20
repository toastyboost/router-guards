const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@lib': path.resolve(__dirname, '../src/lib'),
    '@root': path.resolve(__dirname, '../src'),
  };

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
