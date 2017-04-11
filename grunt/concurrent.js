module.exports = {
                 options: {
                    logConcurrentOutput: true
                  },
                  dev: {
                    tasks: ['watch:compass:dev']
                  },
                  update: {
                    tasks: ['watch:livereload','watch:compass:dev']
                  }
                }