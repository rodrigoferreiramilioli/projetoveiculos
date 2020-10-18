const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
let should = chai.should();
chai.use(chaiHttp);
var argv = require('minimist')(process.argv.slice(2));
const TOKEN_TEST = "Envie a placa para testes";
const PARAM_TEST = {"placa":""};

describe("/:placa", function(){
	it("It should returns 405(Method not allowed) for GET request", function(done){
        chai.request(server).get('/:placa')
        .get("/:route")
        .send({})
        .end((err, res) => {
            res.should.have.status(405);
            done();
        });
    });
});