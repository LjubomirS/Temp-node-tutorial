//* fs - file system

const {readFileSync, writeFileSync}=require('fs')

// const fs=require('fs')
// fs.readFileSync  -  isto kao i gornje, samo drukcije napisano

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

// console.log(first, second);

writeFileSync('./content/result-sync.txt',`Hello result: ${first},${second}`)

const result = readFileSync('./content/result-sync.txt','utf-8')

console.log(result);




