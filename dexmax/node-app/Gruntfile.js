module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/style.sass'
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.sass', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true
        },
        options: {
          includePaths: require('node-bourbon').includePaths
        }sub
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
