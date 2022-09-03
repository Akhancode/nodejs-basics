const fs  = require('fs')   

const readfilesync = fs.readFileSync
const writefilesync = fs.writeFileSync

const test = readfilesync('./subfolder/test.txt','utf-8');
console.log(test);

// writefilesync('./subfolder/test_write.txt','Here is the  result');
writefilesync('./subfolder/test_write.txt','Here is the  result',{flag:'a'});//append by 