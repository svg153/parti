const chalkAnimation = require('chalk-animation');
const figlet = require('figlet')
const os = require('os')

// Fetch the specified user from the command line or fall back to the OS username.
let displayName = process.argv[2] || os.userInfo().username;

let message = `Happy Birthday ${displayName}`;
// Increase the spacing between words in the message.
let formattedMessage = message.replace(/ /g, '   ');

figlet(formattedMessage, function(err, data) {
   if (err) {
       console.log('Something went wrong ...');
       console.dir(err);
       return;
   }

   chalkAnimation.rainbow(data).start()
});