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
            className="focus:text-purple-800 hover:text-purple-800 text-gray-600 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
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
