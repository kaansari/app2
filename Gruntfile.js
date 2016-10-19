/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jscoverage');
  grunt.loadNpmTasks('grunt-cafe-mocha');
  grunt.loadNpmTasks('grunt-env');

  grunt.initConfig({
    env: {
      test: { NODE_ENV: 'TEST' },
      coverage: { NODE_ENV: 'COVERAGE' }
    },
    cafemocha: {
      test: {
        src: 'test/*.js',
        options: {
          ui: 'bdd',
          reporter: 'spec',
        },
    },
    coverage: {
      src: 'test/*.js',
      options: {
        ui: 'bdd',
        reporter: 'html-cov',
        coverage: {
          output: 'coverage.html'
        }
      }
    },
  },
  jscoverage: {
    options: {
      inputDirectory: 'lib',
      outputDirectory: 'lib-cov',
      highlight: false
    }
  }
  });
  grunt.registerTask('test', [ 'env:test', 'cafemocha:test' ]);
  grunt.registerTask('coverage', [ 'env:coverage', 'jscoverage', 'cafemocha:coverage' ]);
};