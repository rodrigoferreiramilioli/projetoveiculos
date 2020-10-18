const errors = require('restify-errors');
const modelConsulta = require('../model/consulta');
const ajv = require('ajv')({allErrors: true, jsonPointers: true});
require('ajv-errors')(ajv);

module.exports.validate = function(req, res, next){
    let schema = "";
    let validate = "";
    if((req.method == "GET")||(req.method == "DELETE")){
        schema = require('../schemas/base').get["get /:placa"];
        validate = ajv.compile(schema);
        if (!validate(req.params))
            return next(new errors.BadRequestError(validate.errors[0].message));
    } else{
        if ((req.method == "POST")||(req.method == "PUT")) {
            schema = require('../schemas/base').post["post /"];
            validate = ajv.compile(schema);
            if (!validate(req.body))
                return next(new errors.BadRequestError(validate.errors[0].message));
        }
    }
    return next();
};

module.exports.get = function(req, res, next){    
    async function fileSelect() {
        const pesquisaArquivo = "./bancodados/" + req.params.placa.replace("-","") + ".js";
        return await modelConsulta.consulta(req.params.placa, pesquisaArquivo); 
    };

    fileSelect().then(retorno => {
        res.send(200, retorno);
        return next();
    });    
}

module.exports.post = function(req, res, next){    
    async function fileSelect() {
        const pesquisaArquivo = "./bancodados/" + req.body.placa.replace("-","") + ".js";
        return await modelConsulta.consulta(req.body.placa, pesquisaArquivo); 
    };
    async function fileCreate() {        
        return await modelConsulta.create(req.body); 
    };

    fileSelect().then(retorno => {
        if(retorno.message){
            fileCreate().then(criacao =>{                
                res.send(200, criacao);
                return next();
            });
        } else{
            retorno.message = "Este carro existente";
            res.send(200, retorno);
            return next();
        }        
    });
}

module.exports.delete = function(req, res, next){    
    async function fileSelect() {
        const pesquisaArquivo = "./bancodados/" + req.params.placa.replace("-","") + ".js";
        return await modelConsulta.consulta(req.params.placa, pesquisaArquivo); 
    };
    async function fileDelete() {        
        return await modelConsulta.delete(req.params.placa); 
    };
    fileSelect().then(retorno => {        
        if(!retorno.message){
            fileDelete().then(remover =>{                
                res.send(200, remover);
                return next();
            });
        } else{
            retorno.message = "Este carro não existe";
            res.send(200, retorno);
            return next();
        }  
    });  
} 
module.exports.put = function (req, res, next){
    req.params.placa = req.body.placa;
    async function deleteArq (){
        return await modelConsulta.delete(req.params.placa);       
    }
    async function criarArq (){
        return await modelConsulta.create(req.body);
    }
    deleteArq().then(retorno =>{
        if (retorno){
            criarArq().then(criar => {
                res.send(200, criar);
                return next();
            });
        }
    });
}