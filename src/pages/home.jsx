import React,{useState} from 'react'
import PageCards from '../components/pageCards'
import { useQuery, gql } from '@apollo/client';
import Loading from '../components/loading'
import Error from '../components/error'

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
    const [pageNumbersCarousel, setPageNumberCarousel] = useState([1,2,3,4,5,6])
    let numPages = 0
    const styleToConcat = "h-10 w-10 flex justify-center items-center sm:flex cursor-pointer leading-5 transition duration-150 ease-in rounded-full "

    function moveCaroucel(direction){
      if(direction === 1){
        if(pageNumbersCarousel[5] < numPages){
          let newOrden = []
          pageNumbersCarousel.forEach(element => {
            newOrden.push(element+1)
          });
          setPageNumberCarousel(newOrden)
        }
      }
      else{
        if(pageNumbersCarousel[0] > 1){
          let newOrden = []
          pageNumbersCarousel.forEach(element => {
            newOrden.push(element-1)
          });
          setPageNumberCarousel(newOrden)
        }
      }
    }

    if(loading) return(<Loading/>)
    if(error) return <Error className="h-full"/>
    if(data) {
      let items = data.launchesPast.length
      numPages = (items-items%12)/12
      numPages += items%12 !== 0 ? 1:0
      return(
      <div className="container px-5 h-full w-full mx-auto">
        <PageCards info={{'page':page,'data':data}}/>
        <div className="flex flex-col items-center py-12">
          <div className="flex text-gray-700">
              <div className="h-10 w-10 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer" onClick={() => moveCaroucel(-1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left w-5 h-5">
                      <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
              </div>
              <div className="flex h-10 font-medium rounded-full bg-gray-200">
                  <div className={page === pageNumbersCarousel[0] ? styleToConcat+"bg-teal-600 text-white":styleToConcat} onClick={() => setPage(pageNumbersCarousel[0])}>{pageNumbersCarousel[0]}</div>
                  <div className={page === pageNumbersCarousel[1] ? styleToConcat+"bg-teal-600 text-white":styleToConcat} onClick={() => setPage(pageNumbersCarousel[1])}>{pageNumbersCarousel[1]}</div>
                  <div className={page === pageNumbersCarousel[2] ? styleToConcat+"bg-teal-600 text-white":styleToConcat} onClick={() => setPage(pageNumbersCarousel[2])}>{pageNumbersCarousel[2]}</div>
                  <div className={page === pageNumbersCarousel[3] ? styleToConcat+"bg-teal-600 text-white":styleToConcat} onClick={() => setPage(pageNumbersCarousel[3])}>{pageNumbersCarousel[3]}</div>
                  <div className={page === pageNumbersCarousel[4] ? styleToConcat+"bg-teal-600 text-white":styleToConcat} onClick={() => setPage(pageNumbersCarousel[4])}>{pageNumbersCarousel[4]}</div>
                  <div className={page === pageNumbersCarousel[5] ? styleToConcat+"bg-teal-600 text-white":styleToConcat} onClick={() => setPage(pageNumbersCarousel[5])}>{pageNumbersCarousel[5]}</div>
              </div>
              <div className="h-10 w-10 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer" onClick={() => moveCaroucel(1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right w-5 h-5">
                      <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
              </div>
          </div>
        </div>
      </div>
    )}
}

export default App