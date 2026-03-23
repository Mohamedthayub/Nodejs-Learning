console.log("Hello Node.js");


const os = require("os"); // This line imports a built-in Node.js module after you can use system related functions
 
console.log("Platform" ,os.platform());// it will return the operating system name
console.log("CPU Architecture",os.arch()); //  it will return the CPU architecture
console.log("CPU Cores",os.cpus().length); //  it will give you the cpu details and length is used to count the number
console.log("Total Memory",os.totalmem()); //  it will give the total memory of the computer
console.log("Free Memory",os.freemem()); //  it will show the available memory in your computer
console.log("Home Directory",os.homedir()); //  it will show user folder path 


/*
🔥 Final Understanding (Very Important)

👉 Your code is basically asking:

What OS am I running?
What CPU do I have?
How many cores?
How much RAM?
How much free RAM?
Where is my home folder?

*/