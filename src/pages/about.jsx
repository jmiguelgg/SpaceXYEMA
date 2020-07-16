import React from 'react'
import { useQuery, gql } from '@apollo/client';

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
    return(
        <h1>About page</h1>
    )
}

export default About