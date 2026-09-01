import { isHttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (isHttpError(err)) {
    const status = err.status || err.statusCode;
    const message = err.message || err.name;

    return res.status(status).json({ message });
  }


  res.status(500).json({
    message: err.message || 'Something went wrong',
  });
};



