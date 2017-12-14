let flowerURL = 'https://flowers.vapor.cloud/flowers'
let otherFlowerURL = 'https://flowers.vapor.cloud/flower'

document.getElementById('viewAll').addEventListener('click', displayFlowers);
document.getElementById('addFlower').addEventListener('submit', addFlower);

function displayFlowers() {
    fetch(flowerURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            let flowerList = `<h2>Flowers</h2>`
            data.forEach(function(flower) {

                flowerList += `<ul class="list-group mb-3">
        <li class="list-group-item">Name: ${flower.name}</li>
        <li class="list-group-item">Description: ${flower.description}</li>
        <li class="list-group-item"><img class="imgStyle" src="${flower.imageURL}"</img></li>
        </ul>`
            })
            document.getElementById('flowerList').innerHTML = flowerList;
        })
}


displayFlowers()

function addFlower(e){
    e.preventDefault()
    let newName = document.getElementById('title').value
    let newDescription = document.getElementById('description').value
    let newURL = document.getElementById('url').value
    
  fetch(otherFlowerURL,{
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body : JSON.stringify({
    name : newName,
    description : newDescription,
    imageURL : newURL
  })
  
}).then(function (response) {
    
      displayFlowers() 
    
}) 

//displayFlowers()    
    
}











/*


$.get(url,function(flower){
    //console.log(flower)
    let flowerArray = flower
    //console.log(flower[0].name)
     $(flowerArray).each(function(index,flower){
     console.log(flower.name)
     let list = `<li>Flower Name: ${flower.name}<img class="imgStyle" src=${flower.imageURL}></img></li> `
     $('#flowerList').append(list)
     })
})

*/