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
        <div className="container px-5 h-full w-full mx-auto">
            
        </div>
    )
}

export default About