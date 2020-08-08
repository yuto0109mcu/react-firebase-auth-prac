import React, { useContext } from 'react'

import { AuthContext } from './AuthService'

import { Route, Redirect } from 'react-router-dom'

const LoggedInRoute = ({ component: Component, ...rest }) => {
    // AuthProviderで渡したuserを取得する
    // useContextにAuthContext(Contextオブジェクトです！！Providerではありません。)
    // をわたすことで取得できる。
   const user = useContext(AuthContext)

   return (
      // ログイン済みの場合、渡されたcomponentを描写する
      // ログインしていない場合、ログインページへリダイレクトする
      <Route
         {...rest}
         render={props => 
               user ? (
                  // 渡されたcomponentを描写する
                  <Component {...props} />
               ) : (
                  // ログインページへリダイレクトする
                  <Redirect to="/login" />
               )
         }
      />
   )
}

export default LoggedInRoute