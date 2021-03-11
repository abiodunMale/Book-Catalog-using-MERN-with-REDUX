
const errorHandler = (err, req, res, next) => {
    const errorStatuCode =  res.statusCode === 200 ? 500 : res.statusCode;
    res.status(errorStatuCode);
    res.json({message: err.message})
};


module.exports = { errorHandler };