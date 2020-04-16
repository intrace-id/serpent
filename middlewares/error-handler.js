
function errorHandler (err, req, res, next) {
    let errCode;
    let errMsg;

    err.message ? errMsg = err.message : errMsg = err;
    err.code.length === 3 ? errCode = err.code : errCode = 500;

    res.status(errCode).json(errMsg)
};

module.exports = errorHandler;