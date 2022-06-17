const { exec } = require("child_process");

function UpdateWebsite() {
    exec('ls', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

function CloneAPI() {
    exec('cd modules && git clone https://github.com/BissiGIT/agent-api.git', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

module.exports = { UpdateWebsite, CloneAPI }