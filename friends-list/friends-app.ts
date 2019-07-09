import {Friend} from "./friend";

let friends: Friend[];

//create an instance of Friend
let f1: Friend = new Friend("Emmett Heinrich", 6, "schills@gmail.com", true);
let f2: Friend = new Friend("Anna Bengel", 27, "annab@yahoo.com", false);
let f3: Friend = new Friend("Maria Konerman", 29, "mariak@hotmail.com", false);
let f4: Friend = new Friend("Amber Kidwell", 28, "ak@gmail.com", false);
let f5: Friend = new Friend("David McCann", 30, "dmc@yahoo.com", false);
//print info of Product to console
//console.log(f1.about());

friends = [f1, f2, f3, f4, f5];

for (let i = 0; i<friends.length; i++) {
    console.log(friends[i].about());
};

for (let friend of friends) {
    console.log(friend.about());
}