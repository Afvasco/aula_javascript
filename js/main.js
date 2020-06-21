
// alert("Meu primeiro js");

// var nome = "Antonio";
// alert("Bem vindo " + nome);

// var nome = "Antonio";
// var idade = 57;
// alert(nome + " tem " + idade + " anos");

// var idade = 57;
// var idade2 = 10;
// alert(idade + idade2);

// var idade = "57";
// var idade2 = "10";
// alert(idade + idade2);

// var nome = "Antonio";
// var n1 = 9;
// var n2 = 3;
// var frase = "Japão é o melhor time do mundo";
// console.log("Nome = " + nome);
// console.log("Valor 1 = " + n1);
// console.log("Valor 2 = " + n2);
// console.log("Valor 1 + Valor 2 = " + (n1+n2));
// console.log("Valor 1 - Valor 2 = " + (n1-n2));
// console.log("Valor 1 X Valor 2 = " + (n1*n2));
// console.log("Valor 1 / Valor 2 = " + (n1/n2));
// console.log(frase.replace("Japão","Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
// alert(frase.replace("Japão","Brasil"));


// var lista = ["maçã", "pera", "laranja"];
// console.log(lista);
// alert(lista);
// console.log(lista[1]);
// alert(lista[1]);
// lista.push("uva");
// console.log(lista);
// lista.pop();
// console.log(lista);
// lista.push("uva");
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista[0]);
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "));
// console.log(lista.join(" | "));
// console.log(lista.join(" & "));
// console.log(lista.join("   "));


// var fruta = {nome: "maçã", cor: "vermelha"};
// console.log(fruta.nome);
// console.log(fruta.cor);

// var frutas = [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "verde"}];
// console.log(frutas[0].nome);
// console.log(frutas[0].cor);
// console.log(frutas[1].nome);
// console.log(frutas[1].cor);

// var idade = 18;
// if (idade >= 18)
// { 
//     alert("Maior de Idade");
// }
// else 
// { 
//     alert("Menor de Idade"); 
// }

// var idade = prompt("Qual a sua idade");
// if (idade >= 18)
// { 
//     alert("Maior de Idade");
// }
// else 
// { 
//     alert("Menor de Idade");  
// }

// var count = 0;
// while(count <= 5)
// {
//     console.log(count);
//     count += 1;
// }

// var count = 0;
// while(count <= 5)
// {
//     console.log(count);
//     alert(count)
//     count++;
// }

// var count;
// for (count=0; count <= 5; count++)
// {
//     alert(count);
//     console.log(count);
// }

// var d = new Date();
// alert(d);
// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth()+1);
// console.log(d.getFullYear());
// console.log(d.getTime());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// function soma(n1, n2){
//     return n1 + n2;
// }

// function setReplace(frase, nm1, nm2){
//     return frase.replace(nm1, nm2);
// }

// alert(soma(5, 10));
// alert(setReplace("Vai Japão","Japão","Brasil"));


// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true;
//     }
//     else{
//         validar = false;
//     }

//     return validar;
// }

// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade));


function clicou(){
    // alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //abre nova aba
    window.open("https://digitalinnovation.one/");
    //redireciona na mesma aba
    //window.location.href = "https://digitalinnovation.one/"
}

function trocar(elemento){
    //trocar()
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //trocar(this)
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //voltar()
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //voltar(this)
    elemento.innerHTML = "Passe o mouse aqui";
    //alert("Trocar texto");
}

function load(){
    alert("Pagina carregada");
}

function change(elemento){
    console.log(elemento.value);
}