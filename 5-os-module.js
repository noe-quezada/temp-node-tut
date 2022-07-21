const os = require("os");

const user = os.userInfo();

console.log(`uptime: ${(((os.uptime)/60)/60)/24} days`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: (os.totalmem())/(1024*1024*1024),
    freeMem: os.freemem()/(1024*1024*1024),
}

console.log(currentOs);