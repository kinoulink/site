module.exports = {
    options: {
        flatten: true,
        assets: 'dist/assets',
        layout: '<%= yeoman.app %>/templates/layouts/default.hbs',
        partials: '<%= yeoman.app %>/templates/partials/*.hbs',
        data: '<%= yeoman.app %>/src/data/*.{json,yml}'
    },
    pages: {
        src: ['<%= yeoman.app %>/templates/pages/*.hbs'],
        dest : '<%= yeoman.tmp %>'
    }
}