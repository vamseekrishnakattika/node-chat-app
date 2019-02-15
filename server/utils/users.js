

class Users{
  constructor() {
    this.users = []
  }
  addUser (id,name,room) {
    var user = {id,name,room};
    var duplicateUsers = this.users.filter((user) => user.name === name);
    if (duplicateUsers.length == 0) {
      this.users.push(user);
      return user;
    }

  }
  removeUser (id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id != id);
    }
    return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
  getActiveRooms (){
    let activeRooms = [...new Set(this.users.map(item => item.room))];
    return activeRooms;
  }
}

module.exports = {Users};












// class Person{
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Vamsee',25);
// console.log('this.name',me.name);
// console.log('this.age',me.age);
// var description = me.getUserDescription();
// console.log(description);
