module.exports = {
                  livereload:{
                    files:['dev/*.html','dev/*.js','dev/*.css'],
                    options: {
                      livereload: true,
                    }
                  },
                  compass: {
                   files: ['dev/*.scss'],
                   tasks: ['compass:dev']
                  },
                }