
import { MongoClient } from 'mongodb'
import Layout from '@/components/layout/Layout'
import MeetupList from '@/components/meetups/MeetupList'
import React, { Fragment, useEffect,useState } from 'react'
import Head from 'next/head'


const DUMMY_MEETUPS = [
  {
    id:'m1',
    title:'A First Meetup',
    image:'https://media.istockphoto.com/id/502588750/photo/brihadeeswarar-temple-in-thanjavur.jpg?s=1024x1024&w=is&k=20&c=phDju5iW-QTHSqtEJge_oaOZFRuufS9DW-V5wlCuqAA=',
    address:'Some address',
    description:'This is a First Meetup'
  },
  {
    id:'m2',
    title:'A Second Meetup',
    image:'https://media.istockphoto.com/id/502588750/photo/brihadeeswarar-temple-in-thanjavur.jpg?s=1024x1024&w=is&k=20&c=phDju5iW-QTHSqtEJge_oaOZFRuufS9DW-V5wlCuqAA=',
    address:'Another address',
    description:'This is a Second Meetup'
  }
]

function HomePage() {

const [loadedMeetups,setLoadedMeetups] =  useState([])
  useEffect(()=>{
    setLoadedMeetups(DUMMY_MEETUPS)
  },[])
  return (
    <Fragment>
      <Head>
        <title>
          React Meetup
        </title>
        <meta>
        name='description'
        content='A Meetup App'
        </meta>
      </Head>
      <MeetupList meetups={loadedMeetups}/>
    </Fragment>
  
   
  
  )
}

export async function getStaticProps(){
  // fetch data from API or other source

  const client = await MongoClient.connect('mongoconnect')
  const db = client.db()

  const meetupsCollection = db.collection('meetups')
 const meetups =  await meetupsCollection.find().toArray()

 client.close()
  return {
    props:{
      meetups:meetups.map(meetup =>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString()
      }))
    }
  }
}

export default HomePage


