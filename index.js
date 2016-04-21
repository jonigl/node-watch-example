var watch = require('node-watch');
 
watch('file-test.txt', function(filename) {
  console.log(filename, ' changed.');
  
});