import MeetupDetail from '@/components/meetups/MeetupDetail'
import React, { Fragment } from 'react'

function MeetupDetails() {

  console.log("id meet")
  return (

    <MeetupDetail 
    image="https://media.istockphoto.com/id/502588750/photo/brihadeeswarar-temple-in-thanjavur.jpg?s=1024x1024&w=is&k=20&c=phDju5iW-QTHSqtEJge_oaOZFRuufS9DW-V5wlCuqAA=" 
    title="A First Meetup" 
    address="SOME ADDRESS" 
    description="THE MEETUP DESCRIPTION"
    />
    
  )
}

export async function getStaticPaths(){
  return {
    fallback:false,
    paths:[
      {params:{
        meetupId:'m1'
      }
    },
    {params:{
      meetupId:'m2'
    },
    
  },
  {params:{
    meetupId:'m3'
  },
  
}
    ]
  }
}
export async function getStaticProps(context){

  const meetupId = context.params.meetupId

  return{
    props:{
      meetupData:{
       
        image:"https://media.istockphoto.com/id/502588750/photo/brihadeeswarar-temple-in-thanjavur.jpg?s=1024x1024&w=is&k=20&c=phDju5iW-QTHSqtEJge_oaOZFRuufS9DW-V5wlCuqAA=" ,
        id:meetupId,
        title:"A First Meetup" ,
    address:"SOME ADDRESS" ,
    description:"THE MEETUP DESCRIPTION"

      }
    }
  }
}



export default MeetupDetails
