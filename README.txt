Para consumir utilizando o envio da sua preferencia, postman...insominia..
Segue abaixo os metodos utilizados get,post,delete, put
GET
http://localhost:8080/SUAPLACA
exemplo:
http://localhost:8080/GAJ-7275
retorno:
{
  "placa": "GAJ-7275",
  "chassi": "asdhasudhasudhuashdsadhassdasd",
  "renavam": "sdhaushduasudhashduasdhuasd",
  "modelo": "ecosporta",
  "marca": "FORDxaa",
  "ano": "2020"
}

POST 
exemplo:
http://localhost:8080/
BODY JSON:
{
	"placa":"GAJ-7275",
	"chassi":"asdhasudhasudhuashdsadhassdasd",
	"renavam":"sdhaushduasudhashduasdhuasd",
	"modelo":"ecosporta",
	"marca":"FORD",
	"ano":"2020"
}
retorno:
{
  "message":"Carro inserido com sucesso"
}

DELETE
http://localhost:8080/SUAPLACA
exemplo:
http://localhost:8080/GAJ-7275
Retorno:
{
  "message":"Carro excluido com sucesso"
}

PUT
exemplo: alterando o carro placa GAJ-7275 no campo marca para FORDXXXXX
http://localhost:8080/
BODY JSON:
{
	"placa":"GAJ-7275",
	"chassi":"asdhasudhasudhuashdsadhassdasd",
	"renavam":"sdhaushduasudhashduasdhuasd",
	"modelo":"ecosport",
	"marca":"FORDXXXXX",
	"ano":"2020"
}
Retorno
{
  "message": "Carro Alterado com sucesso"
}