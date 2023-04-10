import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allMenuYaml {
        edges {
          node {
            name
            link
          }
        }
      }
    }
  `)

  const menuLinks = data.allMenuYaml.edges.map(({ node }) => (


<Link
            key={node.link}
            to={node.link}
            className="w-full block  px-4 py-2 border-b text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            aria-current={node.current ? 'page' : undefined}
          >
          
            <span className="focus:text-gray-400  hover:text-purple-800 text-gray-600 truncate">{node.name}</span>
          </Link>





    
  ))

  return (
    
      <>{menuLinks}</>
        
      
    
  )
}

export default Menu
