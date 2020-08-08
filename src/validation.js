// validation.js

const isValidPassword = password => password.length > 6

const isValidEmail = email => 
   /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/.test(email)
// 正規表現

// abc@def.ghi
// /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/

const isValidName = name => 
   name.length > 5

export {
   isValidPassword,
   isValidEmail,
   isValidName
}