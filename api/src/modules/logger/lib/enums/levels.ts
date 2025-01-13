enum LogLevel {
  DEBUG = 0,
  SIGNAL = 1,
  DATA = 2,
  INFO = 3,
  NOTICE = 4,
  WARN = 5,  
  ALERT = 6,
  ERROR = 7,
  CRIT = 8,
  FATAL = 9,
};
enum LevelId {
  DEBUG = "debug",
  SIGNAL = "signal",
  DATA = "data",
  INFO = "info",
  NOTICE = "name",
  WARN = "warn", 
  ALERT = "alert",
  ERROR = "error",
  CRIT = "crit",
  FATAL = "fatal"
};
enum LogTag {
  DEBUG = '[DEBUG]',
  SIGNAL = '[SIGNAL]',
  DATA = '[DATA]',
  INFO = '[INFO]',
  NOTICE = '[NOTICE]',
  WARN = '[WARN]',
  ALERT = `[ALERT]`,
  ERROR = '[ERROR]',
  CRIT = '[CRITICAL]',
  FATAL = '[FATAL]',
};


export { LogLevel, LevelId, LogTag };