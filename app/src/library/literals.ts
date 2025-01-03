import type {Request} from "express";
type Prefix = "http" | "https";
const address = (prefix: Prefix, host: string, port: number) => `${prefix}://${host}:${port}/`;
const listening = address => `[APP]: Server listening on: ${address}`;
const ip = (req: Request) => `IPv4: ${req.ip}`;

export { address, listening, ip };