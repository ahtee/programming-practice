// Object Oriented JS

function Twitch() {
  this.channel = channel;
  this.followers = 0;
  this.following = 0;
  this.videos = 0;
  this.chat = 'irc';
}

Twitch.prototype = {
  addFollow() {
    this.followers += 1;
  },
  removeFollow() {
    this.followers -= 1;
  }
};

const name = prompt('Choose a username:');

const Username = Object.create(Twitch(name));

Username.prototype = {
  this.friends = 0;
  this.subscriptions = 0;
};

Username.prototype = {
  addFriend() {
    this.friends += 1;
  }
  
  newSubscriber() {
    this.subscriptions += 1;
    this.duration = new Month();
  }
};

function Month() {
  this.month = currMonth;
  
  if (this.month === 1) {
    this.days = 28;
  } else if (this.month === 11) {
    this.days = 32;
  }
  
  this.days = 31
}
