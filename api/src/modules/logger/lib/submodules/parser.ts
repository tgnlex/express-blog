import Level from "../enums/levels";
import ID from "../enums/identifiers";

function parseLevel(input: string): Level {
  let identifier: string = input.toLowerCase();
  let level: Level;
  switch(identifier) {
    case ID.DEBUG: 
      level = Level.DEBUG;
    case ID.SIGNAL: 
      level = Level.SIGNAL;
    case ID.DATA:
      level = Level.DATA;
    case ID.INFO:
      level = Level.INFO;
    case ID.NOTICE:
      level = Level.NOTICE;
    case ID.WARN:
      level = Level.WARN;
    case ID.ALERT:
      level = Level.ALERT;
    case ID.ERROR:
      level = Level.ERROR;
      break;
    case ID.CRIT:
      level = Level.CRIT;
      break;
    case ID.FATAL:
      level = Level.FATAL 
      break;
    case 'default':
      level = Level.DATA;
      break;      
    }
  
  return level;
  
}

export default parseLevel;