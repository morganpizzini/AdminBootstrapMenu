module.exports = grunt => {
  require('load-grunt-tasks')(grunt);
  require('load-grunt-config')(grunt);
    // starts looking for file change
   grunt.registerTask('default', ['concurrent:dev' ]);
   // create dist folder
   grunt.registerTask('dist', ['compass:dist','uglify:dist','copy:dist']);
 };