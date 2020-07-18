import React,{useState} from 'react'
import Card from '../components/card'
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`{
  launchesPast {
    mission_name
    launch_date_local
    launch_date_utc
    links {
        article_link
        flickr_images
        wikipedia
    }
  }
}`

const App = () => {
  const {loading, error, data} = useQuery(GET_LAUNCHES)
  const [page,setPage] = useState(1)
  function cards(page){
    let cards = []
    console.log(data.launchesPast.length)
    for (let i = page; i <= page*12; i++) {
      cards.push(<Card info={data.launchesPast[i-1]}/>)
    }
    return cards
  }
  if(loading) return <p>Esta cargando...</p>
  if(error) return <p>Ocurrio un error...</p>
  if(data) return(
      <div className="container px-5 w-full mx-auto">
        <div className="grid md:grid-flow-col grid-rows-6 gap-5 sm:grid-rows-12 md:grid-rows-6 lg:grid-rows-4 xl:grid-rows-3">
          {cards(page)}
        </div>
        <div class="flex flex-col items-center py-12">
          <div class="flex text-gray-700">
              <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                      <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
              </div>
              <div class="flex h-12 font-medium rounded-full bg-gray-200">
                  <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1</div>
                  <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white " onClick={() => setPage(2)}>2</div>
                  <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3</div>
                  <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
                  <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">13</div>
                  <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">14</div>
                  <div class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15</div>
                  <div class="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div>
              </div>
              <div class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                      <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
              </div>
          </div>
        </div>
      </div>
    )
}

export default App