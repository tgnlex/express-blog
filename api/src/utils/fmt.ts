import { address } from "@/library/templates";
import { UriPrefix } from "@/library/types/literals";
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