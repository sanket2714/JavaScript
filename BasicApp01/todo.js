//alert('connected!!!')
// var h=document.createElement('h3')
// var myvalue= document.createTextNode("Hello World!")
// h.appendChild(myvalue)
// document.querySelector('h1').appendChild(h)
var ul=document.getElementById('list')
var li;
var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

function addItem(){
//console.log('ADD BUTTON CLICKED');

}
function removeItem(){
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
    }
}
