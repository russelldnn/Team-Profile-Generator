//base page layout for an html
const renderPage = function (employeeCards)
{
return (
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../dist/css/style.css">
</head>
<body>
    <header>
        <h1>Team Profile Generator</h1>
    </header>
    <main>
        <div>
            <div class="container">
                ${employeeCards}
            </div>
        </div>
    </main>
    
</body>
</html>

`
)
}
//the card layout for manager
const managerCard = function (manager) {
    return (
    `
    <div class="card">
    <h2> ${manager.name}</h2>
    <h4> Manager </h4>
    <p> ID: ${manager.id}</p>
    <p> Email: <a href="mailto:${manager.email}"></p>
    <p> Office Number: ${manager.officeNumber}</p>
    </div>
    `
    )
}
//card layout for engineer
const engineerCard = function (engineer) {
    return (
    `
    <div class="card">
    <h2> ${engineer.name}</h2>
    <h4> Engineer </h4>
    <p> ID: ${engineer.id}</p>
    <p> Email: <a href="mailto:${engineer.email}:></p>
    <p> Github: ${engineer.github}</p>
    </div>
    `
    )
}
//card layout for intern
const internCard = function (intern) {
    return (
    `
    <div class="card">
    <h2> ${intern.name}</h2>
    <h4> Intern </h4>
    <p> ID: ${intern.id}</p>
    <p> Email: <a href="mailto:${intern.email}"></p>
    <p> School: ${intern.school}</p>
    </div>
    `
    )
}

//got help with this
//uses a for loop to determine how many cards to generate and an if statement to decide what type
const generateHTML = (data) => {
    let teamArray = [];
    
    for (let i=0; i<data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        
        if (role === 'Manager') {
            const managerData = managerCard(employee);
            
            teamArray.push(managerData);
        }

        if (role === 'Engineer') {
            const engineerData = engineerCard(employee);
            teamArray.push(engineerData);
        }

        if (role === 'Intern') {
            const internData = internCard(employee);
            teamArray.push(internData);
        }
     }

     const employeeJoined = teamArray.join('')
     
     const formTeam = renderPage(employeeJoined);

     
     return formTeam;
}


//exporting to be used outside
module.exports = generateHTML;