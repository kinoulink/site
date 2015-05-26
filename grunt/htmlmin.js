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
                src: [
                    "<%= yeoman.tmp %>/*.html"
                ],
                dest: "<%= yeoman.dist %>"
            }
        ]
    }
};