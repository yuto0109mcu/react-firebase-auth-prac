import React, { useState, useEffect, useContext } from 'react'
import firebase from  '../config/firebase'

import { AuthContext } from '../AuthService'

const Room = () => {
   const [messages, setMessages] = useState(null)
   const [value, setValue] = useState('')

   const user = useContext(AuthContext)

   useEffect(() => {
      firebase.firestore().collection('messages').orderBy('date')
         .onSnapshot((snapshot) => {
               const messages = snapshot.docs.map(doc => {
                  return doc.data()
               })
               setMessages(messages)
         })
   }, [])
   
   const handleSubmit = e => {
      e.preventDefault()

      firebase.firestore().collection('messages')
         .add({
               user: user.displayName,
               content: value,
               date: new Date()
         })

      setMessages([
         ...messages, 
         {
               user: user.displayName,
               email: user.email,
               content: value
         }
      ])
   }


   return (
      <>
         <h1>Room</h1>

         <ul>
               {
                  messages ?
                  messages.map(message => (
                     <li>{message.user}: {message.content}</li>
                  )) :
                  <p>...loading</p>
               }
         </ul>

         <form onSubmit={handleSubmit}>
               <input 
                  type="text"
                  onChange={e => setValue(e.target.value)}
               />
               <button type="submit">送信</button>
         </form>

         <button onClick={() => firebase.auth().signOut()}>Logout</button>
      </>
   )
}

export default Room