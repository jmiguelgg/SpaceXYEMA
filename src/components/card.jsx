import React from 'react'

const Card = (props) => {
    let randomNum = Math.floor(Math.random() * props.info.links.flickr_images.length)

    return(
        <div>
            <h3>This is a new card</h3>
            <img src={props.info.links.flickr_images[randomNum]}/>
            <label>Mission Name: {props.info.mission_name}</label>
            <label>Launching date: {props.info.launch_date_utc}</label>
            <button><a href={props.info.links.wikipedia}>Wikipedia</a></button>
        </div>
    )
}

export default Card