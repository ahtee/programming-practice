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
}

const name = prompt('Choose a username:');

const Username = Object.create(Twitch(name));
