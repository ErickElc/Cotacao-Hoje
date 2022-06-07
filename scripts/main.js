"use strict"
let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,AUD-BRL,RUB-BRL,CAD-BRL,GBP-BRL";
let url2 = "https://metals-api.com/57uvrca6qb2e9kzj8lcljam7x93yaxg49bfs17lvbhyxeb5r6p546zlls6ha";
let select2 = document.getElementById("Selection2");
let input1 = document.querySelector("#Input1");
let input2 = document.querySelector("#Input2");
let pickTexto = select2.options[select2.selectedIndex].text;
input2.placeholder= "USD";
let opcaoTexto2 = 0;
let indexx =  0;
function AtualizarValores(){
    const valorMoedas = fetch(url).then((res)=>{return res.json();})
    .then(function MoedaValor(data){
        let rates = [data.USDBRL.ask, data.EURBRL.ask, data.CADBRL.ask,
        data.GBPBRL.ask,data.RUBBRL.ask, data.AUDBRL.ask]; 
        function SelectMoeda(){
            indexx =  EscolherMoeda();            
            return rates[indexx];
        }
        let valorSelecionado = SelectMoeda();
        input1.addEventListener("keyup", ()=>{
            input2.value = ((input1.value / valorSelecionado)).toFixed(2);
            if(input2.value == 0 || input2.value == null){
                input2.value = '';
                input1.value = '';
            }
        })
        input2.addEventListener("keyup", ()=>{
            input1.value = ((input2.value * valorSelecionado)).toFixed(2)
            if(input2.value == 0 || input2.value == null){
                input2.value = '';
                input1.value = '';
            }
        })
    })             
}
function EscolherMoeda(){
    opcaoTexto2 = select2.selectedIndex;
    return opcaoTexto2;
}
function LimparTexto(){
    let pickTexto = select2.options[select2.selectedIndex].text;
    input2.placeholder= pickTexto;
    input2.value = '';
    input1.value = '';
}