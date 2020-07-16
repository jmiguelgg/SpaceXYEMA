import React from 'react'
import Card from './components/card'
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
    if(loading) return <p>Esta cargando ...</p>
    if(error) return(
        <div>
            <p>Ha ocurrido un error...</p>
            {console.log(error)}
        </div>
    )
    if(data) return(
        <div>
            <Card info={data.launchesPast[0]} />
            <p>Los datos ya llegaron</p>
        </div>
    )
}

export default App