const jsonError = (status, e, res) => res.status(status).json({ error: e });

module.exports.jsonError = jsonError;
