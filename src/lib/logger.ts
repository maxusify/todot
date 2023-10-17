import { PREFIX } from "@/config/app";

enum LogLevel {
  INFO = 0,
  WARN = 1,
  ERROR = 2,
  DEBUG = 3,
}

class Logger {
  private readonly date = new Date();
  private readonly logTypeMap = {
    [LogLevel.INFO]: "INFO",
    [LogLevel.WARN]: "WARN",
    [LogLevel.ERROR]: "ERROR",
    [LogLevel.DEBUG]: "DEBUG",
  };

  /**
   * Formats the log message with the provided log type and message.
   *
   * @param logType The type of log level.
   * @param message The message to be formatted.
   * @return        The formatted log message.
   */
  private formatMessage(logType: LogLevel, message: string): string {
    // eslint-disable-next-line security/detect-object-injection
    const parsedLogType = this.logTypeMap[logType];
    const dateTime = this.date.toUTCString().replace("GMT", "");
    return `${dateTime} [${PREFIX}][${parsedLogType}]: ${message}`;
  }

  /**
   * Logs a message with the given log type.
   *
   * @param logType The log type.
   * @param message The message to log.
   */
  private log(logType: LogLevel, message: string): void {
    switch (logType) {
      case LogLevel.INFO:
        console.log(this.formatMessage(logType, message));
        break;
      case LogLevel.WARN:
        console.warn(this.formatMessage(logType, message));
        break;
      case LogLevel.ERROR:
        console.error(this.formatMessage(logType, message));
        break;
      case LogLevel.DEBUG:
        console.debug(this.formatMessage(logType, message));
        break;
    }
  }

  /**
   * Logs an informational message.
   *
   * @param message The message to be logged.
   */
  info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  /**
   * Logs a warning message.
   *
   * @param message The message to log.
   */
  warn(message: string): void {
    this.log(LogLevel.WARN, message);
  }

  /**
   * Logs an error message.
   *
   * @param message The error message to be logged.
   */
  error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }

  /**
   * Logs a debug message.
   *
   * @param message - The message to be logged.
   */
  debug(message: string): void {
    this.log(LogLevel.DEBUG, message);
  }
}

const logger = new Logger();

export default logger;
