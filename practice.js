const express=require('express')
const fs=require('fs')

const app=express()
app.use(express.json())

// fs.writeFile("info.txt","Name:shaikh",(err)=>{
//     console.log("file created")
// });

// fs.appendFile('info.txt', ' Roll:1',(err)=>{
//     console.log("update successfull")
// })
// fs.readFile("info.txt","utf-8",(err,data)=>{
//     console.log(data)
// })
// fs.rename('info.txt','myInfo.txt',(err)=>{
//     console.log("rename successfull")
// })
// fs.unlink("myInfo.txt",(err)=>{
//     console.log("File deleted")
// })
// fs.unlink("info.txt",(err)=>{
//     console.log("File deleted")
// })