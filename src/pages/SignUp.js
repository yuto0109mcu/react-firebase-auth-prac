import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import firebase from '../config/firebase'

const SignUp = ({ history }) => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = e => {
      e.preventDefault()

      firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(({user}) => {
               user.updateProfile({
                  displayName: name 
               })
         })
         .then(() => {
               history.push('/')
         })
         .catch(err => {
               console.log(err)
         })
   }

   return (
      <>
         <h1>SignUp</h1>
         <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="name">Name</label>
                  <input 
                     type="name" 
                     id="name"
                     placeholder="name"
                     name="name"
                     onChange={e => setName(e.target.value)}
                  />
               </div>
               <div>
                  <label htmlFor="email">Email</label>
                  <input 
                     type="email" 
                     id="email"
                     placeholder="email"
                     name="Email"
                     onChange={e => setEmail(e.target.value)}
                  />
               </div>
               <div>
                  <label htmlFor="password">Password</label>
                  <input 
                     type="password" 
                     id="password"
                     placeholder="password"
                     name="Password"
                     onChange={e => setPassword(e.target.value)}
                  />
               </div>
               <button type="submit">SignUp</button>
         </form>
         <Link to="/login">Login</Link>
      </>
   )
}

export default SignUp