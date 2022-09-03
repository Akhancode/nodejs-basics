const fs  = require('fs')   

const readfile = fs.readFile
const writefile = fs.writeFile

readfile('./subfolder/test.txt','utf-8',(err,result)=>{
    if(err){
            console.log(err)
    }
    console.log(result)
})

writefile('./subfolder/test.txt',`here is the test file of fs without sync`,(err,result)=>{
    if(err){
        console.log(err)
}
console.log(result) 
})
