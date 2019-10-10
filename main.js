const Bot = require("./classes/bot");
const Logger = require("./classes/logger");
const fs = require("fs");

var logger = new Logger("Your bot name comes here");

logger.log("Starting up bot");
logger.log("Loading Tasks");
logger.log("Loading Config");

var configFile = JSON.parse(fs.readFileSync("./setup/config.json"));

fs.readdir("./setup/tasks", (error, tasks) => {
  if (error) {
    logger.log(error, "fail");
  } else {
    tasks.map((task, index) => {
      taskFile = JSON.parse(fs.readFileSync(`./setup/tasks/${task}`));
      new Bot(taskFile, configFile, index + 1, logger).main();
    });
  }
});
