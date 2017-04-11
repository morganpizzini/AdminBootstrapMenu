module.exports = {
    options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost',
    },
    livereload: {
        options: {
            open: true,
            base:{
            path: 'dev',
            options: {
                index: 'index.html',
                maxAge: 300000
            }
        }
        }
    },
}