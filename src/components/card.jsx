import React from 'react'
import useDateFormat from '../hooks/dateFormat'

const Card = (props) => {
    let date = useDateFormat(props.info.launch_date_utc)
    let randomNum = Math.floor(Math.random() * props.info.links.flickr_images.length)

    return(
        <div className="bg-white rounded overflow-hidden shadow-lg my-2">
            <img className="w-full h-64 mx-auto" src={props.info.links.flickr_images[randomNum]} alt="Image launch"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.info.mission_name}</div>
                <p className="text-grey-darker text-base">{date}</p>
                <a href={props.info.links.wikipedia} target="_blank">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded">Wikipedia</button>
                </a>
            </div>
        </div>
    )
}

export default Card