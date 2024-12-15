import {development} from 'variables';
const errorHandler = (err, req, res, next) => {
  err.status = err.status || "fail";
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: development ? err.stack : undefined
  })
};
const handlers = [errorHandler];
export default handlers;