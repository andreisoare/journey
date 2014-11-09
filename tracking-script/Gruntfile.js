
module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      script: ["dist/journey.js"],
    },

    neuter: {
      script: {
        options: {
          includeSourceMap: false,
          template: "{%= src %}"
        },
        dest: grunt.option('target') === "dev" ? 'dist/journey.min.js' : 'dist/journey.js',
        src: 'src/journey.js'
      }
    },

    uglify: {
      prod: {
        files: {
          'dist/journey.min.js': 'dist/journey.js'
        }
      }
    },

    watch: {
      js: {
        files: ['src/*.js'],
        tasks: ['neuter']
      }
    }
  });

  grunt.loadNpmTasks('grunt-neuter');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  if (grunt.option('target') === "dev") {
    grunt.registerTask('default', [
      'neuter',
      'watch'
    ]);
  } else {
    grunt.registerTask('default', [
      'neuter',
      'uglify',
      'clean:script'
    ]);
  }
};
