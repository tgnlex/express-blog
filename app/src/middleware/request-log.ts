import { ip } from "@/library/literals";

const reqLog = (req, res, next) => {
  const request = {
    method: req.method,
    headers: req.headers,
    body: req.body || {},
  };
  console.info(ip(req));
  console.info({request: request});
  next();
};

export default reqLog;