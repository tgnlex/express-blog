import { Data } from "./interface/data.ts";
import {LogLevel as Level, LogTag as LTag} from "./lib";
import tags from "../../library/templates/tags.ts";
import {format, parseLevel} from "./lib/submodules/index.ts";
import type {LogConfig as Config} from './interface/index.ts'
import { LevelId } from "./lib/index.ts";
class Logger {
  private level: Level;
  public tag
  constructor(config?: Config) {
    this.level = parseLevel(config.level) || Level.DATA;
    this.tag = config.tag || tags.api;
  };
  protected checkLevel(level: Level) {
    if (this.level >= level) { return true };
    return null;
  }  
  protected applyTags(input: string, level: Level) {
    let ltag = LTag[level];
    return `${ltag} ${this.tag(input)}`
};
public setLevel(identifier: LevelId) {
  this.level = parseLevel(identifier);
}
debug(data: any, context = {}): void {
    let level: number = Level.DEBUG;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.debug(log);
    };
  }; 
  signal(data: any, context = {}): void {
    let level: number = Level.SIGNAL;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.log(log);
    };
  };
  data(data: any, context = {}): void {
    let level: number = Level.DATA;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.info(log);
    };
  };
  info(data: any, context = {}): void {
    let level: number = Level.INFO;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.info(log);
    };
  };
  notice(data: any, context = {}): void {
    let level: number = Level.NOTICE;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.info(log);
    };
  };
  warn(data: any, context = {}): void {
    let level: number = Level.WARN;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.warn(log);
    };
  };
  alert(data: any, context = {}): void {
    let level: number = Level.ALERT;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.warn(log);
    };
  };
  error(data: any, context = {}): void {
    let level: number = Level.ERROR;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.error(log);
    };
  };
  crit(data: any, context = {}): void {
    let level: number = Level.CRIT;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.error(log);
    };
  };
  fatal(data: any, context = {}): void {
    let level: number = Level.INFO;
    let fmt, log: string;
    if (this.checkLevel(level)) {
        fmt = `${format(data, context)}`;
        log = this.applyTags(fmt, level);
        console.error(log);
    };
  };
};
export default Logger;