
const http = require("http")/* Estou trazendo um modulo nativo require("http") por ele eu consigo criar um servidor (ADENDO REQUIRE ESTOU PUXANDO TRAZENDO UM MODULO NATIVO*/
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res)=>{
  /* Quero que ele devolva 200, indicando que esta tudo OK*/  
res.statusCode = 200;
  /* set Header= cabeçalho     Content Type eu indico oque vai ser retornardp qual e o tipo       text plain e o tipo que no caso e padrão de arquivos de textos */
res.setHeader('Content-Type', 'text/plain');

  /* Vai parar o conteudo e vai mostrar esta mensagem na tela*/ 
res.end ('Ólá Mundo \n Meu Primeiro Script')
})


/* Criei o servidor agora irei startar, Essa função ira startar o meu servidor */  
server.listen(port, host, ()=>{
console.log (`Server running at http://${host}
:${port}`)
})