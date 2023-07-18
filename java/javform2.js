
let Materials = localStorage.getItem('Matcomp')
Materials = Materials ? JSON.parse(Materials) : []
listMat()

function sumMat() {
    let NumPedido   = document.getElementById('NumP').value
    let CatPedido = document.getElementById('CatP').value
    let ProductoM = document.getElementById('ProM').value
    let ValorM   = document.getElementById('valueM').value

    if(NumPedido && CatPedido && ProductoM && ValorM){
        Materials.push({ 'numeroPedido': NumPedido, 'cantidadmaterial': CatPedido, 'tipoMaterial': ProductoM, 'valorMaterial': ValorM })
        listMat()
    }
}


function listMat() {
    document.getElementById('NumP').value = ''
    document.getElementById('CatP').value = ''
    document.getElementById('ProM').value = ''
    document.getElementById('valueM').value = ''

    let html = ''
    Materials.forEach((elemt, index) => {
        html += `<div class="col-2 mb-3"> ${elemt.numeroPedido} </div>`
        html += `<div class="col-2 mb-3"> ${elemt.cantidadmaterial} </div>`
        html += `<div class="col-4 mb-3"> ${elemt.tipoMaterial} </div>`
        html += `<div class="col-2 mb-3">   ${elemt.valorMaterial} </div>`
        html += `<div class="col-2"> <a href="#" class="btn btn-danger" onclick="elimMat(${index})"> X </a> </div>`
    })

    localStorage.setItem('Matcomp', JSON.stringify(Materials))
    document.getElementById('Materials').innerHTML = html
}

function elimMat(item) {
    Materials.splice(item, 1)
    listMat()
}





