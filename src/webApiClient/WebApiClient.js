const request = require('superagent')

export function fetchFilters() {
    return request.get(`http://localhost:8000/greeting.php`)
        .then(response => {
            console.log(response.text)
            return response.text
        })
        .catch(error => error)
}