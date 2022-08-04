const axios = require('axios')

const expensesUrl = 'http://localhost:3004/expenses'
let expenses = [
    {
        id: 1,
        amount: '20',
    },
    {
        id: 2,
        amount: '30',
    },
]

// clear expenses db
axios
    .delete(expensesUrl)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })

// add expenses to db
axios
    .post(expensesUrl, expenses)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
