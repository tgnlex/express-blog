import type { Tag } from "./data"
import LevelId  from "../lib/enums/identifiers"
type LogConfig = {
    level: string;
    tag: Tag;
};

export type {LogConfig};