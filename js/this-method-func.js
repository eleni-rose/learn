// Practicing methods, functions, objects, and more

const employee = {
    name: 'John Doe',
    salary: 150000,
    title: 'Vice President',
    isAdmin: true,
    email() {
        console.log(`Hey team! Great work on the project this week. Sincerely, ${this.name} `)
    }
}

let roster = ['John', 'Jane', 'Mary', 'Emily', 'Tim', 'Bob'];

function displayRoster(func) {

    for (const element of roster)
    {
        if (element === 'Jane') {
            func();
        } else {
            console.log(`Employee ${element} is currently employeed!`)
        }
    }
}

function fire() {
    console.log(`Employee Jane has been terminated.`);
    roster.splice(1,1);
}

displayRoster(fire);

console.log(roster);