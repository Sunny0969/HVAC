export function notFoundHandler(req, res) {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(err, _req, res, _next) {
  if (err?.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation failed',
      details: Object.values(err.errors || {}).map((e) => e.message),
    });
  }

  if (err?.code === 11000) {
    const field = Object.keys(err.keyPattern || {})[0] || 'field';
    return res.status(409).json({ error: `Duplicate ${field}` });
  }

  if (err?.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid id' });
  }

  console.error(err);
  return res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
}
