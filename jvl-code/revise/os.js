const os = require('os');
console.log( "os Platform is :" + os.platform());
console.log("Os Architecture is : " + os.arch() );
console.log("Total Memory", Math.round(os.totalmem() / 1024 ** 3) + "GB"); // how many total memory the computer have
console.log("Free Memory", Math.round(os.freemem() / 1024 ** 3)+ "GB"); // how much free memory in the computer
console.log("Home Directory",os.homedir()); // show the home directory of the computer
console.log("CPU cores", os.cpus().length); // show the cpu core of the computer
console.log("OS Uptime",os.uptime()); // show the uptime in the computer.