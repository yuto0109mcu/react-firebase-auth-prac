import React, { useState, useEffect } from 'react'

import firebase from './config/firebase'

// contextで他のコンポーネントに渡したい値は、'ログインしているユーザー(自分)の情報'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   
   useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
         setUser(user)
      })
   }, []) // 第二引数に空の配列を指定することで、
         // 初回描写時に一度だけ実行するように設定できる。

   return (
      <AuthContext.Provider value={user}>
         {children}
      </AuthContext.Provider>
   )
}

export {
   AuthContext,
   AuthProvider
}