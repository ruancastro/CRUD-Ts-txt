<h1>CRUD para testar o typescript</h1>

<p>Peguei basicamente o código do CRUD feito com JS que está no repositório https://github.com/ruancastro/CRUD-com-JS-txt e passei a parte de criação para typescript para que eu pudesse então observar se estava funcionando tudo ok</p>

<h2>Para rodar o código:</h2>

<ul>

<li>npm init para criar o JSON , é importante observar que inicialmente criamos um arquivo index.ts mas o endpoint (arquivo principal) deve ser setado no npm init como index.js
 </li>

    npm i typescript

<li>O comando abaixo cria o arquivo de configuração do typescript onde após isso começaremos a programar</li>

    npx tsc --init

<li>Tire o comentário das linhas 17 e 18 do tsconfig.json, colocando como output a pasta "./dist/" (linha 17 outDir) </li>

<li> Falar para o typescript começar a compilação, mesmo enquanto eu ainda to programando </li>

    npx tsc --watch
<li> Instala os pacotes do js no projeto node  </li>
	

    npm install @types/node

<li> instala o query-string no projeto </li>

    npm i query-string
</ul>

<h2>Exemplo de utilização: </h2>
<p> [localhost:8000/criar-usuario?id=2&nome=ruan-castro](http://localhost:8000/criar-usuario?id=2&nome=ruan-castro)</p>
