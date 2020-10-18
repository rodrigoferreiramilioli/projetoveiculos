const base = require('../controller/base');
module.exports = function(server) {
    server.get(
        '/:placa', 
        base.validate,
        base.get
    );
    server.post(
        '/', 
        base.validate,
        base.post
    );
    server.del(
        '/:placa', 
        base.validate,
        base.delete
    );
    server.put(
        '/:placa', 
        base.validate,
        base.put
    )
}