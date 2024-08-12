window.onload = function() {
    document.getElementById("value2-sum").addEventListener("focusout", function(){
        val1 = document.getElementById("value1-sum").value;
        val2 = document.getElementById("value2-sum").value;

        document.getElementById("result-sum").value = parseInt(val1) + parseInt(val2);
    });

    document.getElementById("value2-sub").addEventListener("focusout", function(){
        val1 = document.getElementById("value1-sub").value;
        val2 = document.getElementById("value2-sub").value;

        document.getElementById("result-sub").value = parseInt(val1) - parseInt(val2);
    });

    document.getElementById("value2-mult").addEventListener("focusout", function(){
        val1 = document.getElementById("value1-mult").value;
        val2 = document.getElementById("value2-mult").value;

        document.getElementById("result-mult").value = parseInt(val1) * parseInt(val2);
    });

    document.getElementById("value2-div").addEventListener("focusout", function(){
        val1 = document.getElementById("value1-div").value;
        val2 = document.getElementById("value2-div").value;

        document.getElementById("result4").value = parseInt(val1) / parseInt(val2);
    });
}