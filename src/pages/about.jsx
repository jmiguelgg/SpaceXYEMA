import React from 'react'
import { useQuery, gql } from '@apollo/client';
import Loading from '../components/loading'
import Error from '../components/error'

const GET_COMPANY_INFO = gql`
    {
        company {
            name
            summary
            links {
              elon_twitter
              twitter
              website
            }
        }
    }
`

const About = () => {
    const {loading, error, data} = useQuery(GET_COMPANY_INFO)
    if(loading) return(<Loading/>)
    if(error) return (<Error className="h-full"/>)
    if(data) return(
        <div className="container px-5 h-full w-full mx-auto text-white">
            <h1 className="text-5xl">{data.company.name}</h1>
            <p className="text-2xl py-5">{data.company.summary}</p>
            <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                    <label>CEO Twitter</label>
                    <a href={data.company.links.elon_twitter} target="_blank" rel="noopener noreferrer">
                        <img className="w-10 my-4 mx-auto" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png" alt="Twitter"/>
                    </a>
                </div>
                <div className="text-center">
                    <label>Company Twitter</label>
                    <a href={data.company.links.twitter} target="_blank" rel="noopener noreferrer">
                        <img className="w-10 my-4 mx-auto" src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png" alt="Twitter"/>
                    </a>
                </div>
                <div className="text-center">
                    <label>Official Home Page</label>
                    <a href={data.company.links.website} target="_blank" rel="noopener noreferrer">
                        <img className="w-10 my-4 mx-auto" src="./logo192.png" alt="SpaceX wen site"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About