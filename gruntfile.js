module.exports = grunt => {
  require('load-grunt-tasks')(grunt);
  require('load-grunt-config')(grunt);
    // starts server and looking for file change
   grunt.registerTask('default', ['connect' , 'concurrent:update' ]);
   //starts looking for change on scss
   grunt.registerTask('dev', ['concurrent:dev' ]);
   // create dist folder
   grunt.registerTask('dist', ['compass:dist','uglify:dist','copy:dist']);
 };