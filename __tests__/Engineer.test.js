const Engineer = require('../lib/Engineer');

test('github confirmation', () => {
    const engineer = new Engineer ('Russell Dunn', 'russelldnn@gmail.com', '1234', 'russelldnn')
    expect(engineer.getGithub()).toBe('russelldnn');
})

test('role confirmation', () => {
    const engineer = new Engineer ('Russell Dunn', 'russelldnn@gmail.com', '1234', 'russelldnn')
    expect(engineer.getRole()).toEqual('Engineer');
})