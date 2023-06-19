const username = document.querySelector("#Username")
const email = document.querySelector("#email")
const password = document.querySelector("#Password")
const confirmPassword = document.querySelector("#confirmPassword")
const form = document.querySelector("#form")

const showError = (input , message)=>{
    let parentElement = input.parentElement
    parentElement.classList = 'form-control error'
    const small = parentElement.querySelector("small")
    const errorIcon = parentElement.querySelector("#error")
    const successIcon = parentElement.querySelector("#check")
    errorIcon.style.visibility = 'visible'
    successIcon.style.visibility = 'hidden'
    small.innerText = message
  }

const showSuccess = (input)=>{
  let parentElement = input.parentElement
  parentElement.classList = 'form-control success'
  const errorIcon = parentElement.querySelector("#error")
  const successIcon = parentElement.querySelector("#check")
  errorIcon.style.visibility = 'hidden'
  successIcon.style.visibility = 'visible'
}

const checkEmpty = (elements)=>{
  elements.forEach((element) => {
    if(element.value === ''){
     showError(element , 'input not fixed')
    }
    else{
      showSuccess(element)
    }
  });
}

const checkEmail = (email)=>{
  const reg = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

  if(reg.test(email.value)){
    showSuccess(email)
  }
  else{
    showError(email , 'invalid Email')
  }

}

const checkPassword = (input , min , max) =>{

  if(input.value.length < min){
    showError(input , 'should password at lest 6')
  }
  else if(input.value.length > max){
    showError(input , 'should password not above 20')
  }
  else{
    showSuccess(input)
  }
}



function getDataFromLocalStorage(){
  const checkUsers = localStorage.getItem('users')
   if(checkUsers){
    return JSON.parse(checkUsers)
   }else{
return []
   }
    
  }

  // function getDataUserLocalStorage(){
  //   const checkUsersInfo = localStorage.getItem('userInfo')
  //    if(checkUsersInfo){
  //     return JSON.parse(checkUsersInfo)
  //    }else{
  // return []
  //    }
      
  //   }
  

  function addDataToLocalStorage(username , email , password){
    const getData = getDataFromLocalStorage()
    getData.push({username: username  , email: email , password: password})
    console.log(username , email , password)
    localStorage.setItem('users' , JSON.stringify(getData))
  }

  // function addUserInfoFromLocalStorage( email , password){
  //   const getUserData = getDataUserLocalStorage()
  //   getUserData.push( email , password)
  //   console.log( email , password)
  //   localStorage.setItem('userInfo' , JSON.stringify(getUserData))
  // }


  



form.addEventListener("submit" , (event)=>{
    event.preventDefault()
    checkEmpty([username , email , password , confirmPassword])
    checkEmail(email)
    checkPassword(password , 6 , 20)
   addDataToLocalStorage(username.value, email.value , password.value)
  
window.location.href='login.html'
})

