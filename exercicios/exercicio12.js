var Calculator = {

    average: function (...valores) {

        if (valores == null || valores == undefined || valores.length == 0) {

            return 0;
        }

        let soma = 0;
        
        valores.forEach((valor) => {
            soma += valor;
        });

        return soma / valores.length;
    }

};

console.log(Calculator.average(3, 4, 5));