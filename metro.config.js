const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration for React Native
 * Includes custom asset extension for handling MP3 files.
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const customConfig = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'mp3'],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'png', 'jpg'] // This line is usually not necessary since png and jpg are included by default.
  }
};

module.exports = mergeConfig(defaultConfig, customConfig);
