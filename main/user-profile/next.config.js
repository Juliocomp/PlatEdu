/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const deps = require('./package.json').dependencies;
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "UserProfile",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
        },
        exposes: {
          './profile': './pages/profile.jsx'
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          }, 
        },
      })
    );
    return config;
  }
}
   
module.exports = nextConfig
