module.exports = {
                  dev: {
                   options: {              
                     sassDir: ['dev'],
                     cssDir: ['dev'],
                     cacheDir: '/cache',
                     raw: 'preferred_syntax = :scss\n',
                     outputStyle: 'expanded',
                     environment: 'development'
                   }
                  },
                 dist: {
                  options: {              
                    sassDir: ['dev'],
                     cssDir: ['dist'],
                     cacheDir: '/cache',
                     raw: 'preferred_syntax = :scss\n',
                     outputStyle: 'compressed',
                     environment: 'production'
                  }
                 },
                }