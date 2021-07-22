const withPWA = require('next-pwa');

module.exports = {
    reactStrictMode: true,
    eslint: {
        dirs: [
            'src/pages/',
            'src/components/',
            'src/layout/',
            'src/types/',
            'src/lib/',
        ],
    },
};

module.exports = withPWA({
    pwa: {
        dest: 'public', // swの出力ディレクトリ
        // runtimeCaching: []
    },
});
