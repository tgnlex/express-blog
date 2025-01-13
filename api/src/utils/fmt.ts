import { address } from "@/library/templates/index.ts";
import { UriPrefix } from "@/library/types/literals.ts";
let addr: string;

function fmtAddr(vars, protocol?: UriPrefix) {
  if (protocol) {
    addr = address(protocol, vars.host, vars.port)
  } else {
    addr = address('http', vars.host, vars.port);
  }
  return addr;
}


export {fmtAddr};