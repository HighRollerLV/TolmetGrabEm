const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Your custom configuration adjustments
const customConfig = {
  resolver: {
    // Keep your custom asset extensions
    assetExts: [...defaultConfig.resolver.assetExts, 'mp3'],
  },
};

// Merge the Expo config with your custom config
const finalConfig = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    assetExts: [...defaultConfig.resolver.assetExts, ...customConfig.resolver.assetExts],
    sourceExts: [...defaultConfig.resolver.sourceExts], // Assuming no changes needed here
  },
};

module.exports = finalConfig;
