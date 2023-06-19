
const url = document.querySelector("#url")
const title = document.querySelector("#text")
const btn = document.querySelector("#btn")
const posts = document.querySelector(".posts")
const textare = document.querySelector("#textare")
const input = document.querySelector(".hell")


function addElement(ur){
ur.forEach( (element) => {
    posts.innerHTML += `<div class="post-columns">
    <div class="post-img">
    <img src="${element.url}" alt="">
</div>
    <div class="post-contact">
        <h1>${element.title}</h1>
        <p>${element.textare}</p>
    </div>
</div>`;
});

}

function loadData(){
    const loadElement = getDataFromLocalStorage()
    loadElement.forEach((element)=>{
    addElement(element)
    }) 
}
loadData()

function getDataFromLocalStorage(){
  const getData = localStorage.getItem('Data')
  if(getData){
    return JSON.parse(getData)
  }else{
    return []
  }
}
console.log(getDataFromLocalStorage())

function setDataToLocalStorage(data){
    userData = getDataFromLocalStorage()
    userData.push(data)
    localStorage.setItem('Data' , JSON.stringify(userData))
}

btn.addEventListener("click" , (event)=>{
event.preventDefault()
 if(!url.value == '' , !title.value == ' ' , !textare.value == ''){
    const data = {
        url: url.value,
        title: title.value,
        textare: textare.value

    }
    addElement([data])
    setDataToLocalStorage([data])
 }
})