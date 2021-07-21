const withPWA = require("next-pwa");

module.exports = {
    reactStrictMode: true,
};

module.exports = withPWA({
    pwa: {
        dest: "public", // swの出力ディレクトリ
        // runtimeCaching: []
    },
});