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
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
                </div>
            </div>
        </div>
    )
}

export default Card