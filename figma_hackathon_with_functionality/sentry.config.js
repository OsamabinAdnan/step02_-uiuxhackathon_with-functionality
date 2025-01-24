const {withSentryConfig} = require('@sentry/nextjs');

const moduleExports = {
    // Your existing Next.js config here
};

const SentryWebpackPluginOptions = {
    silent: true, // Suppresses all logs
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);