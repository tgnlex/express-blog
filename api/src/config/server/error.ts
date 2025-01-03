import tags from "library/templates/tags";
function loggerHandler(err, req, res, next) {
  const message = tags.error(err.stack)
  console.error(message);
  next(err);
};
function clientHandler(err, req, res, next) {
  if (req.xhr) {
    let status: number = err.status || err.statusCode || 500; 
    res.status(status);
    res.json({error: "Something went wrong!"})    
  } else {
    next(err);
  }
}
function exceptHandler(err, req, res, next) {
  let status = err.status || err.statusCode || 500;
  res.status(status).json({error: err});
};
const errorHandler = {
  logger: loggerHandler,
  client: clientHandler,
  except: exceptHandler
}

export default errorHandler;