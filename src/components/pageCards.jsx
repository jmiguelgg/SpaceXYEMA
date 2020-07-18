import React,{useState,useEffect} from 'react'
import Card from '../components/card'

const PageCards = (props) => {
    const [cards,setCards] = useState([])
    function generateCards(page){
        let newArrayCards = []
        let items = props.info.data.launchesPast.length
        let numPages = (items-items%12)/12
        numPages += items%12 !== 0 ? 1:0
        if(numPages !== page){
            for (let i = (page-1)*12; i < page*12; i++) {
                newArrayCards.push(<Card key={i} info={props.info.data.launchesPast[i]}/>)
            }
        }
        else{
            for (let i = (page-1)*items%12; i < page*items%12; i++) {
                newArrayCards.push(<Card key={i} info={props.info.data.launchesPast[i]}/>)
            }
        }
        setCards(newArrayCards)
    }
    useEffect(() => {
        generateCards(props.info.page)
    },[props.info.page])
    return(
        <div className="grid md:grid-flow-col gap-5 sm:grid-rows-12 md:grid-rows-6 lg:grid-rows-4 xl:grid-rows-3">
          {cards}
        </div>
    )
}

export default PageCards