module.exports = {
                  dev: {
                   options: {              
                     sassDir: ['dev/assets/scss'],
                     cssDir: ['dev/assets/css'],
                     cacheDir: '/cache',
                     raw: 'preferred_syntax = :scss\n',
                     outputStyle: 'expanded',
                     environment: 'development'
                   }
                  },
                 dist: {
                  options: {              
                    sassDir: ['dev/assets/scss'],
                     cssDir: ['dist/assets/css'],
                     cacheDir: '/cache',
                     raw: 'preferred_syntax = :scss\n',
                     outputStyle: 'compressed',
                     environment: 'production'
                  }
                 },
                }