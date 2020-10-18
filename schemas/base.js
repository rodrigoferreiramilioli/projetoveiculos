var get = {
    "get /:placa": {
        "type": "object",
        "additionalProperties": false, 
        "required": ["placa"],
        "properties": {
            "placa": { 
                "type": "string",                
                "minLength": 8,
                "maxLength": 8
            }
        },
        "errorMessage": {
            "type": "Sua requisição não segue o padrão estabelecido (veja documentação no swagger).",
            "properties": {                
                "placa": "placa é necessária, no formato XXX-NNNN"                
            }
        } 
    }       
}
var post = {
    "post /": {
        "type": "object",
        "additionalProperties": true, 
        "required": ["placa","chassi","modelo"],
        "properties": {
            "placa": { 
                "type": "string",                
                "minLength": 8,
                "maxLength": 8
            },
            "chassi": { 
                "type": "string",                
                "minLength": 1                
            },
            "modelo": { 
                "type": "string",                
                "minLength": 1                
            },
        },
        "errorMessage": {
            "type": "Sua requisição não segue o padrão estabelecido (veja documentação no swagger).",
            "properties": {                
                "placa": "placa é necessária, no formato XXX-NNNN",
                "chassi" : "Chassi no mínimo informado",
                "modelo" : "Modelo no mínimo informado",               
            }
        } 
    }
}
module.exports.get = get;
module.exports.post = post;