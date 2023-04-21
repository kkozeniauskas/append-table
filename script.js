var vardas = document.querySelector ('input[placeholder="vardas"]')
var pavarde = document.querySelector ('input[placeholder="pavardė"]')
var amzius = document.querySelector ('input[placeholder="amžius"]')
var button = document.querySelector ('#add')
var removeFirst = document.querySelector ('#remove-first')
var removeLast = document.querySelector ('#remove-last')
var table = document.querySelector ('table')

button.addEventListener("click", eilute);

function uzpildyta(){
    return vardas.value && pavarde.value && amzius.value;
  }

  function eilute(){
    if (uzpildyta()){
        var tr = document.createElement("tr")

    var tdVardas = document.createElement("td")
    tdVardas.innerText = vardas.value;
    var tdPavarde = document.createElement("td")
    tdPavarde.innerText = pavarde.value;
    var tdAmzius = document.createElement("td")
    tdAmzius.innerText = amzius.value;

    tr.appendChild(tdVardas)
    tr.appendChild(tdPavarde)
    tr.appendChild(tdAmzius)
    table.appendChild(tr)

    vardas.value = "";
    pavarde.value = "";
    amzius.value = "";
    } else{
    alert("Neužpildyti visi laukai!")  
    }
  }

  removeFirst.addEventListener("click", function(){
    var td = document.getElementsByName("td")

    if(td.lenght){
       p[0].remove() 
    }
  })

  removeLast.addEventListener("click", function(){
    var td = document.getElementsByName("td")

    if(td.lenght){
       p[p.length - 1].remove() 
    }
  })

  


 

 
  