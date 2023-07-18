let contents = localStorage.getItem('productosL')
contents = contents ? contents.split(',') : []
listpr()


function sumpr() {
    let product = document.getElementById('product').value
    product  = product.split(',')
    for (let i = 0; i < product.length; i++) {
        if(product[i]){
            contents.push(product[i])
            listpr()
        }
    }
}

function listpr() {
    document.getElementById('product').value = ''
    let Pview = ''
    for (let i = 0; i < contents.length; i++) {
        Pview = Pview +'<div class="col-10 mb-3">' + contents[i] + '</div>'
        Pview = Pview +'<div class="col"> <a href="#" class="btn  btn-danger" onclick="borrapr('+ i +')"> X </a> </div>'
        
    }

    localStorage.setItem('productosL', contents)
    document.getElementById('contents').innerHTML = Pview
}

function borrapr(product) {
    contents.splice(product, 1)
   listpr()
}