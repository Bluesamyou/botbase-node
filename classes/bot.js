const Logger = require("./logger");
const ProxyManager = require("./proxymanager");
const cheerio = require("cheerio");
const fs = require("fs");
const request = require("request").defaults({
  timeout: 10000,
  gzip: true,
  forever: true,
  headers: {
    "Accept-Encoding": "application/gzip"
  }
});

var logger = new Logger("Bot name here");

var log = logger.log.bind(logger);

class Bot {
  constructor(task, config, taskId) {
    const manager = new ProxyManager();
    this.config = config;
    this.task = task;
    this.rotateProxy = manager.get_next_proxy();
    this.cookieJar = request.jar();
    logger.setTid(taskId);
  }

  main() {
    console.log("Bot is running");
  }
}

module.exports = Bot;
