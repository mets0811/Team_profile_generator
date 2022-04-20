const Manager = require('../lib/Manager.js');


test('creates an Manager object', () => {
    const manager = new Manager('Tanya', 60, 'tanyaleepr@gmail', 44);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//role
test('gets role of employee', () => {
    const manager = new Manager('Tanya', 60, 'tanyaleepr@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 