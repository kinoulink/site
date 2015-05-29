module.exports = {
    dist: {
        options: {
            collapseWhitespace: true,
            conservativeCollapse: true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA: true,
            removeOptionalTags: true,
            preserveLineBreaks: true,
            removeComments: true
        },
        files: [
            {
                expand: true,
                cwd: "<%= yeoman.tmp %>",
                src: "*.html",
                dest: "<%= yeoman.dist %>"
            }
        ]
    }
};