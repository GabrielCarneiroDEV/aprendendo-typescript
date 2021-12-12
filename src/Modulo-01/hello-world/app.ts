const mensagem: string =  "Hello world!";

console.log(mensagem)

/*ao ser compilado é gerado um arquivo chamado "app.js" este arquivo então pode ser executado normalmente como um arquvio javascript.  
Pra isso foi utilizado o comando 'tsc ./app.ts'.


Para que não seja necessário repetir o mesmo processo várias vezes para todos os arquvios .ts podemos configurar o arquvio tsconfig.json. Da segunte forma:

No terminal na raiz do projeto:
tsc --init

-- o arquivo tsconfig.json será criado.

Agora utilizamos ctrl+shift+b e clickamos em compilar tsconfig.json
Ou em tsc watch para monitorar 
*/