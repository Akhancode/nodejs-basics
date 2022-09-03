const os  = require('os');
const path = require('path');

// console.log(os.uptime())
const currentOs = {
    name : os.userInfo(),
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()

}
 
// console.log(currentOs)
// console.log(path.sep)
const filepath = (path.join('/subfolder','test.txt'))
// console.log(filepath)
// console.log(path.basename(filepath))
const absolute = path.resolve(__dirname,'subfolder','test.txt')
console.log(absolute)