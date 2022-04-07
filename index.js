var escolha = document.querySelector('#alternativa') 
var invisivel = document.querySelector('#invisivel') 
var code = document.querySelector('#codificar') 
var decode = document.querySelector('#decodificar') 
var mensagem = document.querySelector('#escrever');  
var respostaFinal = document.getElementById('resultado');
var botao = document.querySelector('#botao') 


escolha.addEventListener("change", function (e) {        
    var metodoEscolhido = e.target.value;
  
    if (metodoEscolhido == "base64") {
        invisivel.style.display = "none";
        botao.setAttribute("onclick", "base64()") 
    } else {
        invisivel.style.display = "block";
        botao.setAttribute("onclick", "cesar()")   
    }
  });


codificar.addEventListener("click", function () {
    botao.innerText = "Codificar";               
  });
  
 decodificar.addEventListener("click", function () {
    botao.innerText = "Decodificar";             
  });

function base64(){
  var input = mensagem.value
  var escolha = code.checked
  respostaFinal.value = base64Logic(input, escolha);
}

function base64Logic(input, escolha){
  return (escolha)? btoa(input) : atob(input);
}

function cesar()  {
  var input = mensagem.value.split("");
  var escolha = code.checked
  var numero =  parseInt(invisivel.value);
  if (escolha){
    respostaFinal.value = cesarCodificando(input, numero);
  } 
  else {
    respostaFinal.value = cesarDecodificando(input, numero);
  }
}

function cesarCodificando(arr, key){
  return arr.map((c)=>{
      let code = c.charCodeAt();
      if(code >= 65 && code <= 90){
          return String.fromCharCode(((code - 65 + key) % 26) + 65)
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 + key) % 26) + 97)
      } else return c
  }).join('')
}

function cesarDecodificando(arr, key){
  return arr.map((c)=>{
      let code = c.charCodeAt();
      if(code >= 65 && code <= 90){
          return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
      } else return c
  }).join('')
}