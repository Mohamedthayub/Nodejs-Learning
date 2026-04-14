const os = require('os');

console.log("Platform :",os.platform());
console.log("Architect :",os.arch());
console.log("Total Memory : ",Math.round(os.totalmem() / 1024** 3) ) ;
console.log("Home Directory :",os.homedir());
console.log("CPU cores :",os.cpus().length);
console.log("OS uptime :",os.uptime() / 60);