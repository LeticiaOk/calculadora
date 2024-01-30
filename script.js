var operador = '';
var numero = '';
var i = 0;
var conta = 0;
var operacao = 'off';
var escrever = window.document.getElementsByClassName('tela')[0];


function clicar(caractere){

    if (numero == ''){
        escrever.innerHTML = ''; 
    }

    if (typeof caractere == 'number' || caractere == '.'){
        operacao = 'off'; 

        if (numero.length <= 14){
            escrever.innerHTML += caractere;  
            numero += caractere;
        }

   
    }
    
    if ('x-+/'.includes(caractere)){
        if (i == 0){ 
            operador = caractere;   
        }
        operacao = 'on'; 
        
    }else{
        operacao = 'off'; 
    }

    // ADIÇÃO
    if (operador == '+' && (operacao == 'on' || caractere == '=')){
        if (i == 0){
            conta = Number(numero); 
            i++;
        }else{
            conta += Number(numero);          
        }
        numero = ''; 
        escrever.innerHTML = conta;
        }

    // SUBTRAÇÃO
    if (operador == '-' && (operacao == 'on' || caractere == '=')){
        
        if (i == 0){ 
            conta = Number(numero); 
            i++;
        }else{
            conta -= Number(numero); 
        }
        numero = '';
        escrever.innerHTML = conta;
    }
    
    // DIVISÃO
    if (operador == '/' && (operacao == 'on' || caractere == '=')){
        if (i == 0){ 
            conta = Number(numero);
            i++;
        }else{
            if (numero != ''){
                conta /= Number(numero);
            }        
        }
        numero = '';
        escrever.innerHTML = conta; 
    }

    // MULTIPLICAÇÃO
    if (operador == 'x' && (operacao == 'on' || caractere == '=')){
        if (i == 0){ 
            conta = Number(numero); 
            i++ 
        }else{
            if (numero != ''){
                conta *= Number(numero);
            }
             
        }
        numero = ''; 
        escrever.innerHTML = conta; 
    }

    if ('x-+/'.includes(caractere)){
        operador = caractere; 
      }

    if (caractere == 'del'){
        if (numero != ''){
            numero = numero.slice(0, -1);
            escrever.innerHTML = numero;
        }else{
            operador = '';
            numero = '';
            i = 0;
            conta = 0;
            operacao = 'off';
            escrever.innerHTML = '';
        }        
    }

    if (caractere == 'reset'){
        operador = '';
        numero = '';
        i = 0;
        conta = 0;
        operacao = 'off';
        escrever.innerHTML = '';
    }
  }
  