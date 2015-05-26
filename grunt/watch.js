module.exports = {
    compass: {
        files: [
            "<%= yeoman.app %>/styles/{,*/}*.scss"
        ],
        tasks: [
            "compass:server",
            "autoprefixer",
            "concat:css_vendor",
            "concat:css_my"
        ]
    },
    scripts: {
      files: [
          "<%= yeoman.app %>/scripts/{,*/}*.js"
      ],
        tasks: [
            "concat:js_my"
        ]
    },
    assemble: {
      files: [
          "<%= yeoman.app %>/templates/{,*/}*.hbs"
      ],
      tasks: [
          "assemble:pages"
      ]
    },
    livereload: {
        options: {
            livereload: "<%= connect.options.livereload %>"
        },
        files: [
            "<%= yeoman.tmp %>/{,*/}*.html",
            ".tmp/styles/*.css",
            ".tmp/scripts/*.js",
            "<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
        ]
    }
};