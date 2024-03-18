var requestCount = 0;
module.exports = function (request, response, next) {
    requestCount++;
    if (requestCount == 1) {
        response.json({
            status: 'notready'
        });
    } else {
        response.json({
            status: 'ready'
        });
    }
};