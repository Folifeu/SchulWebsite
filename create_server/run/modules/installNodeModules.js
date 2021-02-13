module.exports = {
    install: () => {
        const { exec } = require("child_process");
        var command = "cd ../server";
        if (conf.server_create_config.initNodeModules || typeof conf.server_create_config.initNodeModules === "undefined"){
            for (var i = 0; i < conf.server_create_config.initNodeModules.length; i++){
                command += "&npm i " + conf.server_create_config.initNodeModules[i];
            }
        }
        if (conf.server_create_config.initDB || typeof conf.server_create_config.initDB === "undefined"){
            command += "&cd db&node init.js&cd ../";
        }
        if (conf.server_create_config.startServer) {
            command += `&node${conf.server_create_config.runWithNodemon ? "mon" : ""} server.js`
        } else if (conf.server_create_config.returnHome) {
            command += "&cd ../run";
        }

        if (!conf.server_create_config.runWithoutConsole){
            console.log("Run this command to finish your initialization:");
            console.log(command);
        } else {
            console.log(`Command "${command}" will be executed. This might take some time.`)
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`\nstderr: ${stderr}`);
                    console.log(`\nCommand was executed successfully!`);
                    return;
                }
            });
        }
    }
}