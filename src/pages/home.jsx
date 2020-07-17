import React from 'react'
import Card from '../components/card'
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_date_utc
    links {
        article_link
        video_link
        flickr_images
    }
  }
}`

const App = () => {
  const {loading, error, data} = useQuery(GET_LAUNCHES)
  if(loading) return <p>Esta cargando...</p>
  if(error) return <p>Ocurrio un error...</p>
  if(data) return(
      <div className="container mx-auto px-4 w-1/2 mx-auto">
        <h1>Hola</h1>
        <Card info={data.launchesPast[0]}/>
      </div>
    )
}

export default App