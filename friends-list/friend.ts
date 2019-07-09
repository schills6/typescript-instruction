export class Friend {
    friendName: string;
    age: number;
    email: string;
    bestFriend: boolean;

    constructor(fn: string, a: number, em: string, bf: boolean) {
        this.friendName = fn;
        this.age = a;
        this.email = em;
        this.bestFriend = bf;
    }

    about(): string {
        return "Friend: " + this.friendName + " Age: " + this.age + " Email: " + this.email + " Best Friend: " + this.bestFriend;
    }
}