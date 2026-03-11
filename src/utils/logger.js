const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "..", "..", "logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const deletedLog = path.join(logDir, "deleted.log");
const errorLog = path.join(logDir, "errors.log");

function logDeleted(message) {
  const entry = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(deletedLog, entry);
}

function logError(message) {
  const entry = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync(errorLog, entry);
}

module.exports = {
  logDeleted,
  logError
};