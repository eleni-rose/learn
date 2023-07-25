const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const belchers = [
    {
        name: 'Bob',
        role: 'Dad',
        age: 55
    },
    {
        name: 'Linda',
        role: 'Mom',
        age: 52
    },
    {
        name: 'Tina',
        role: 'Daughter',
        age: 13
    },
    {
        name: 'Louise',
        role: 'Daughter',
        age: 8
    },
    {
        name: 'Gene',
        role: 'Son',
        age: 11
    }
]

const intros = belchers.map((family) => (
    `${family.name} is the ${family.role} of the Belcher family.`
));
