module.exports ={
                  dist: {
                      options: {
                          report: 'gzip'
                      },
                      files: {
                          'dist/assets/js/index.js' : [
                              'dev/assets/js/index.js',
                          ]
                      }
                  },
                }