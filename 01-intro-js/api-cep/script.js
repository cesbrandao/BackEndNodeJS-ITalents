window.onload = function () {
    document.getElementById("cep").addEventListener("focusout", function(){
        cepSearch(this.value);
    });
}

function cleanForm() {
    document.getElementById("street").value = "";
    document.getElementById("house-number").value = "";
    document.getElementById("neighborhood").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
}

function meu_callback(content) {
    if (!("erro" in content)) {
        //Atualiza os campos com os valores.
        document.getElementById("street").value = (content.logradouro);
        document.getElementById("neighborhood").value = (content.bairro);
        document.getElementById("city").value = (content.localidade);
        document.getElementById("state").value = (content.uf);

    } else {
        cleanForm();
        alert("CEP não encontrado.");
    }
}

function cepSearch(zip_code) {

    //regex: pega qualquer informação que não seja número, globalmente, e substitui por vazio.
    var cep = zip_code.replace(/\D/g, ''); 

    if (cep != "") {
        //regex: Números de 0 a 9, 8 posições
        var valid_cep = /^[0-9]{8}$/;

        if (valid_cep.test(cep)) {
            document.getElementById("street").value = "...";
            document.getElementById("neighborhood").value = "...";
            document.getElementById("city").value = "...";
            document.getElementById("state").value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);

        } else {
            cleanForm();
            alert("Formato do CEP inválido!");
        }

    } else {
        cleanForm();
    }
}