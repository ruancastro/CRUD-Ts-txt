// importação de bibliotecas
import { createServer, IncomingMessage, ServerResponse}  from 'http';
import {parse}  from 'query-string';
import * as url from 'url';
import {writeFile} from 'fs';


const port = 8000;
const server = createServer((request:IncomingMessage,response:ServerResponse) => {
    
    const urlparse = url.parse(request.url ? request.url : '',true);

    var resposta;

    //receber informações do usuário
    const params = parse(urlparse.search ? urlparse.search : ''); //busca só o que tem dps da interrogação

    if(urlparse.pathname == '/criar-usuario'){
   
        //console.log(params); 
        //http://127.0.0.1:3000/?nome=Ruan-castro&idade=23-anos&id=1
         writeFile('users/'+params.id+'.txt',JSON.stringify(params), function (err: any) {
            if (err) throw err;
            console.log('Saved!');

            resposta = 'Usuario criado com sucesso';

            response.statusCode = 200; //fala para o navegador "encontrei e está tudo certo"
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
            
       });
      }      
    
});

//EXECUÇÃO

server.listen(port, () =>{
    console.log(`Server running on port ${port}`);

});

