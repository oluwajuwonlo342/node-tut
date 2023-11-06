const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');
console.log('Start')
readFile('./contents/subfolder/first.txt', 'utf8',(err,result)=> {
    if(err){
        console.log(err)
    }
    console.log(result)

    const first = result;
readFile('./contents/subfolder/first.txt', 'utf8',(err,result)=> {
    if(err){
        console.log(err)
        return;
    }
const second =  result;
writeFile(
    './contents/result-async.txt',
    `Here is the result : ${first}, ${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('Done with this task')

    })
    
})
})
console.log('Starting the next one')

 

