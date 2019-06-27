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
    //console.log('ADD BUTTON CLICKED');
    var input=document.getElementById('input')
    var item=input.value
    var textnode=document.createTextNode(item)

    if(item === '')
        return false
    else{
        //create li
        li=document.createElement('li')

        //create checkbox
        var checkbox=document.createElement('input')
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check')

        //create label
        var label=document.createElement('label')

        //add these elements on web page
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        
        setTimeout(()=>{
            li.className='visual';
        },100)
        input.value=''
    }

}
function removeItem(){
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
    }
}
