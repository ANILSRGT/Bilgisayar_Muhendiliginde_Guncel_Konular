const fs=require("fs");
const path=require("path");
const fsPromises=fs.promises;

const logger=async (message,logName)=>{
    const currentDate=new Date().toUTCString();
    const logMessage=`${currentDate}\t${message}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname,"..","logs"))) {
            await fsPromises.mkdir(path.join(__dirname,"..","logs"));
        }

        await fsPromises.appendFile(path.join(__dirname,"..","logs",logName),logMessage);
    } catch (error) {
        console.log(error);
    }
}

module.exports=logger;