
type Data = string | number | boolean | object | null | {};
type LogData = Array<Data>;
type TagData = Array<Data>;
type Log = (data: LogData, context: {}) => void;
type Tag = (data: TagData) => string;

export type { LogData, TagData, Data };

export {Log, Tag};