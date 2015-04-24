module.exports = {
    options: {
        port: 8002,
        hostname: "127.0.0.1",
        livereload: 35728
    },
    livereload: {
        options: {
            open: true,
            middleware: function (connect) {
                return [
                    connect.static('.tmp'),
                    connect.static('./app/src')
                ];
            }
        }
    }
};