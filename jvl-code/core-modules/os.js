const  os = require("os");
// console.log(os);

console.log("Platform :",os.platform()); // it will show what platform os runs
console.log("Architecture :",os.arch()); // what architecture  does the os have
console.log("Total Memory", Math.round(os.totalmem() / 1024 ** 3) + "GB"); // how many total memory the computer have
console.log("Free Memory", Math.round(os.freemem() / 1024 ** 3)+ "GB"); // how much free memory in the computer
console.log("Home Directory",os.homedir()); // show the home directory of the computer
console.log("CPU cores", os.cpus().length); // show the cpu core of the computer
console.log("OS Uptime",os.uptime()); // show the uptime in the computer.