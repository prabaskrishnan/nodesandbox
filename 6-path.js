const os = require('os')
const path = require('path')


//info about user

const user = os.userInfo()
 console.log(user)

//return system uptime in seconds

console.log(os.uptime())


console.log(path.sep)