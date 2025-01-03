import { address } from "@/library/templates";
import { UriPrefix } from "@/library/types/literals";
function fmtAddr(vars, protocol?: UriPrefix) {
  let addr;
  if (protocol) {
    addr = address(protocol, vars.host, vars.port)
  } else {
    addr = address('http', vars.host, vars.port);
  }
}


export {fmtAddr};