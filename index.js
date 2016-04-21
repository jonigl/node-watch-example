var watch = require('node-watch');
 
watch('README.md', function(filename) {
  console.log(filename, ' changed.');
  
});
