
import { useRouter } from 'next/router'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'

function NewMeetUpPage() {

  const router = useRouter()

    async function addMeetupHandler(enteredMeetupData){
        
     const response = await fetch('/api/new-meetup',{
      method:'POST',
      body:JSON.stringify(enteredMeetupData),
      headers:{
        'Content-Type':'application/json'
      }
     })

     const data = await response.json()
      console.log(enteredMeetupData)

      router.push('/')
    }
  return (
    <NewMeetupForm onAddMeetup ={addMeetupHandler} />
  )
}

export default NewMeetUpPage
