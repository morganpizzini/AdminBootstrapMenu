module.exports = {
  dist: {
    files: [
      { expand: true,
        cwd:'dev/',
        src: [
       "index.html"
        ],
        dest: 'dist/'}
    ],
  }
};