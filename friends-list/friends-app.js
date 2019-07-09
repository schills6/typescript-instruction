"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_1 = require("./friend");
var friends;
//create an instance of Friend
var f1 = new friend_1.Friend("Emmett Heinrich", 6, "schills@gmail.com", true);
var f2 = new friend_1.Friend("Anna Bengel", 27, "annab@yahoo.com", false);
var f3 = new friend_1.Friend("Maria Konerman", 29, "mariak@hotmail.com", false);
var f4 = new friend_1.Friend("Amber Kidwell", 28, "ak@gmail.com", false);
var f5 = new friend_1.Friend("David McCann", 30, "dmc@yahoo.com", false);
//print info of Product to console
//console.log(f1.about());
friends = [f1, f2, f3, f4, f5];
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i].about());
}
;
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    console.log(friend.about());
}
