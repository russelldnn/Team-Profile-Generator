const Intern = require('../lib/Intern');

test('School confirmation', () => {
    const intern = new Intern ('Russell Dunn', 'russelldnn@gmail.com', '1234', 'University of Toronto')
    expect(intern.getSchool()).toBe('University of Toronto');
})

test('role confirmation', () => {
    const intern = new Intern ('Russell Dunn', 'russelldnn@gmail.com', '1234', 'University of Toronto')
    expect(intern.getRole()).toEqual('Intern');
})