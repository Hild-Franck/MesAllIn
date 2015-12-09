const login = require("facebook-chat-api");
var util = require("util");
var EventEmitter = require("events").EventEmitter;

function Facebook(user, password) {
    EventEmitter.call(this);
    login({email: user, password: password}, function callback (err, api) {
        if(err) this.emit('error', err);
        this.emit('ready', api);
    }.bind(this));
}
util.inherits(Facebook, EventEmitter);

module.exports = Facebook;