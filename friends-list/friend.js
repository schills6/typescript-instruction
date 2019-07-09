"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    function Friend(fn, a, em, bf) {
        this.friendName = fn;
        this.age = a;
        this.email = em;
        this.bestFriend = bf;
    }
    Friend.prototype.about = function () {
        return "Friend: " + this.friendName + " Age: " + this.age + " Email: " + this.email + " Best Friend: " + this.bestFriend;
    };
    return Friend;
}());
exports.Friend = Friend;
