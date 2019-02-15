const expect = require('expect');

const {Users} = require('./users');

var users;
beforeEach(() => {
  users = new Users();
  users.users = [{
    id:'1',
    name:'Mike',
    room:'Node Course'
  }, {
    id:'2',
    name:'Jen',
    room:'React Course'
  }, {
    id:'3',
    name:'Julie',
    room:'Node Course'
  }]
});

describe('Users',() => {
  it('should add new user',() => {
    var users = new Users();
    var user = {
      id:'123',
      name:'Vamsee',
      room:'The office fans'
    }
    var resUser = users.addUser(user.id,user.name,user.room);
    expect(users.users).toEqual([user]);
  });
  it('should remove a user',() => {
    var user = users.removeUser('1');
    expect(user.id).toBe('1');
    expect(users.users.length).toBe(2);
  });
  it('should not remove user',() => {
    var user = users.removeUser('99');
    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });
  it('should find user',() => {
    var user = users.getUser('1');
    expect(user.id).toBe('1');
  });
  it('should not find user',() => {
    var user = users.getUser('20');
    expect(user).toBeFalsy();
  });
  it('should return names for node course',() => {
      var userList = users.getUserList('Node Course');
      expect(userList).toEqual(['Mike','Julie']);
  });
  it('should return names for createLocationMessage course',() => {
      var userList = users.getUserList('React Course');
      expect(userList).toEqual(['Jen']);
  });
});
