const fileSystem = require('fs');
function verificaArquivo(placa, pesquisaArquivo){
    return new Promise(resolve => {        
        fileSystem.access(pesquisaArquivo, fileSystem.constants.F_OK, (err) => {
            if(err)
                resolve ({"message" : "Placa não existente na base de dados"})
            else{
                let consulta = "./bancodados/" + placa.replace("-","") + ".js";
                fileSystem.readFile(consulta, 'utf-8', (err, data)=> {
                    arqCont = data.replace("module.exports = ","");
                    resolve (JSON.parse(arqCont));
                });                
            }        
        });
    });
}
function criarArquivo(obj){
    return new Promise(resolve =>{
        let placaArq = "./bancodados/" + obj.placa.replace("-","")+".js";
        let dadosArquivo = "module.exports = " + JSON.stringify(obj);
        fileSystem.writeFile(placaArq, dadosArquivo, (err) =>{            
            if(!err)
                resolve({"message":"Carro criado com sucesso"});
            else resolve({"message":"Ocorreu um erro"})
        });        
    });
}
function deletaArquivo(placa){
    return new Promise(resolve =>{
        let placaArq = "./bancodados/" + placa.replace("-","")+".js";
        fileSystem.unlink(placaArq, (err) =>{
            if(!err)
                resolve({"message":"Carro excluido com sucesso"});
            else resolve({"message":"Ocorreu um erro"})
        });
    });
}
module.exports.consulta = verificaArquivo;
module.exports.create = criarArquivo;
module.exports.delete = deletaArquivo;