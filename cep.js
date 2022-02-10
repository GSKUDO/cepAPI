$(document).ready(function(){
    $("*").css("margin", "0");
    $("h1").css("background", "yellow");
    $("h1").css("background-position", "100%");
    $("h1").css("color", "blue");
    $("h1").css("text-align", "center");
    $("p").css("margin", "auto");
    $("#enderecocompleto").css("background", "linen");
    $("#enderecocompleto").css("margin", "auto");
    $("#enderecocompleto").css("width", "50%");

    $("#botaoconsulta").on("click",function(){
        let cepbuscado = $("#numerocep").val();
        $.ajax({ url: `https://cep.awesomeapi.com.br/${cepbuscado}`})
        .done((data)=>{
            enderecocep = Object.values(data);
            console.log(enderecocep)
            $("#cep").html("CEP: " + enderecocep[0]);
            $("#address").html("Endereço: " + enderecocep[3]);
            $("#district").html("Bairro: " + enderecocep[5]);
            $("#city").html("Cidade: " + enderecocep[8]);
            $("#state").html("Estado: " + enderecocep[4]);
            $("iframe").attr("src", `https://www.google.com/maps?api=1&q=${enderecocep[6]}%2C${enderecocep[7]}&hl=es;z=14&output=embed`);
        }).fail(function() {alert("CEP inválido")
            $("#cep").html("CEP: " + `${cepbuscado}`);
            $("#address").html("Endereço: ");
            $("#district").html("Bairro: ");
            $("#city").html("Cidade: ");
            $("#state").html("Estado: ");
        });
        
    });
})