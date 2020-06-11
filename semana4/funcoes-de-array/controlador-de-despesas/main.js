function limparCadastro(){
    const valorMax = document.getElementById("maximo");
    const valorMin = document.getElementById("minimo");
    let valor =  document.getElementById("valor"); 
    let description = document.getElementById("description");
    valor.value=""
    description.value=""
    valorMax.value =""
    valorMin.value=""
    
}

function validarCadastro(){
    let valor =  document.getElementById("valor"); 
    let description = document.getElementById("description");
    let tipo = document.getElementById("options");
    if((valor.value !== "") || (description.value != "") || (tipo.value!=="")){
    

        const despesa={
            valor: valor.value,
            description: description.value,
            tipo : tipo.value

        }
        arrayDespesa.push(despesa)
        console.log(arrayDespesa);
             
    }else{
      alert("Campo não validado");
    }
}

let arrayDespesa = [
    
]

function mostrarDespesas(){
    let valor =  document.getElementById("valor"); 
    let description = document.getElementById("description");
    let tipo = document.getElementById("options")
    let listaDespesa = document.getElementById("listaDespesa"); 

    let filterDespesas =  arrayDespesa.filter((despesa, idx, arr ) =>{
        return despesa.tipo === tipo.value
        
    })
    console.log(filterDespesas);
        
    listaDespesa.innerHTML += `<p>valor: ${valor.value}</p>Descrição:${description.value}<p>Tipo:${tipo.value}<p>`
}

