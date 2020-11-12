const chalkAnimation = require('chalk-animation');
const figlet = require('figlet')

figlet('Happy   Birthday   Kumar', function(err, data) {
   if (err) {
       console.log('Something went wrong...');
       console.dir(err);
       return;
   }
   chalkAnimation.rainbow(data).start()
});