import type { Port } from "@/types/aliases";

type AppVars = {
    name?: string;
    host: string;
    port: Port;
    address?: string;
    email?: string;
    node_env: string;
    log_level: string;
}

const defaults: AppVars = {
    name: undefined,
    host: "localhost",
    port: undefined,
    address: undefined,
    email: undefined,
    node_env: "development",
    log_level: "debug"
}

function setVars(app, vars: AppVars) {
    app.set('trust proxy', 1);
    app.set('name', vars.name);
    app.set('host', vars.host);
    app.set('port', vars.port);
    app.set('address', vars.address);
    app.set('email', vars.email);
    app.set('log level', vars.log_level);
    app.set('node env', vars.node_env);
      
}

export {defaults, setVars};
export type {AppVars};