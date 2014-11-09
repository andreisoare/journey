
module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      script: ["dist/tb_analytics.js"],
    },

    neuter: {
      script: {
        options: {
          includeSourceMap: false,
          template: "{%= src %}"
        },
        dest: grunt.option('target') === "dev" ? 'dist/tb_analytics.min.js' : 'dist/tb_analytics.js',
        src: 'src/tb_analytics.js'
      }
    },

    uglify: {
      prod: {
        files: {
          'dist/tb_analytics.min.js': 'dist/tb_analytics.js'
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
