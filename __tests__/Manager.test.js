const Manager = require('../lib/Manager');

test('phone confirmation', () => {
    const manager = new Manager ('Russell Dunn', 'russelldnn@gmail.com', '1234', '876-543-2121')
    expect(manager.getOfficeNumber()).toBe('876-543-2121');
})

test('role confirmation', () => {
    const manager = new Manager ('Russell Dunn', 'russelldnn@gmail.com', '1234', '876-543-2121')
    expect(manager.getRole()).toEqual('Manager');
})