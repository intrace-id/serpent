
function errorHandler (err, req, res, next) {
    res.status(err.code).json(err.message);
    break;
};

module.exports = errorHandler;