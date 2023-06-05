function funcao(){
    var nome = document.getElementById("nome").value;
    var matr = document.getElementById("matr").value;
    var email = document.getElementById("email").value;
    var area = document.getElementById("area").value;
    var cH = document.getElementById("carga").value;

    console.log(nome);
}

function criarAt(){
    var info = [];

    var nomeAt = document.getElementById("nome").value;
    info.push(nomeAt);
    var descAt = document.getElementById("Descr").value;
    info.push(descAt);
    var dia = document.getElementById("select").value;
    info.push(dia);

    var hora1 = document.getElementById("timer1").value;
    info.push(hora1);
    var hora2 = document.getElementById("timer2").value;
    info.push(hora2);
    var difHora = new Date (hora1 - hora2);
    info.push(difHora);

    console.log(info);
    console.log(dia);
    console.log(nomeAt);

    var listaElementos = document.getElementById("lista");

    var listaHTML = "";
    for (var i = 0; i <info.length; i++) {
      listaHTML += "<li>" + info[i] + "</li>";
    }

    listaElementos.innerHTML = listaHTML;     
}
