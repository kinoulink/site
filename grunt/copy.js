module.exports = {
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: "<%= yeoman.app %>",
                dest: "<%= yeoman.dist %>",
                src: [
                    "*.{ico,png,txt}",
                    "*.config",
                    "fonts/*",
                    "sounds/*"
                ]
            },
            {
                expand: true,
                cwd: ".tmp",
                dest: "<%= yeoman.dist %>",
                src: [
                    "*.html"
                ]
            }
        ]
    }
};