/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {

  // properties
  // ----------

  name: 'Tyler',
  friends: 500,
  messages: [
    'ayy lmao',
    'hey',
    'never look back',
  ],

  // methods
  // -------

  postMessage: function(message) {
    // make sure message exists and not an empty string
    if(!message || message === '') {
      return;
    }

    // add to messages array
    facebookProfile.messages.push(message);

    // see test #1
  },

  deleteMessage: function(index) {

    var totalMessages = facebookProfile.messages.length;

    if ( isNaN(index) ) {
      console.log('err. index should be a number');
      return;
    }
    // more validation here
    // else if (totalMessages < 0 ||  )

    facebookProfile.messages.splice(index,1);
    // see test #2
  },

  addFriend: function() {
    facebookProfile.friends++;
    // see test #3
  },

  removeFriend: function() {
    facebookProfile.friends--;
    // see test #4
  }
};

// test #1
// console.log(facebookProfile.messages);
// facebookProfile.postMessage('long time, no see');
// console.log(facebookProfile.messages);


// test #2
// console.log(facebookProfile.messages);
// // del first message
// facebookProfile.deleteMessage(0);
// // del last messages
// facebookProfile.deleteMessage(facebookProfile.messages.length - 1);
// console.log(facebookProfile.messages);

// test #3 + #4
// console.log(facebookProfile.friends);
// facebookProfile.addFriend();
// console.log(facebookProfile.friends);
// facebookProfile.removeFriend();
// console.log(facebookProfile.friends);