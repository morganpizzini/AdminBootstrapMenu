module.exports ={
                  dist: {
                      options: {
                          report: 'gzip'
                      },
                      files: {
                          'dist/index.js' : [
                              'index.js',
                          ]
                      }
                  },
                //   dev: {
                //       options: {
                //           beautify: true,
                //           compress: false,
                //           mangle: false
                //       },
                //        files: {
                //           'dev/index.js' : [
                //               'index.js',
                //           ]
                //       }
                //   }
                }