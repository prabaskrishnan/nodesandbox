const fs = require('fs')


fs.readFile('./content/second.txt', 'utf8' , (err, result) => {
    if (err) {

        console.log(err)
        return
    }
console.log(result)

})