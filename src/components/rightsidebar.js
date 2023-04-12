import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const RMenu = () => {
  const data = useStaticQuery(graphql`
    query {
        allSocialmenuYaml {
        edges {
          node {
            name
            link
          }
        }
      }
    }
  `)




  
  const menuLinks = data.allSocialmenuYaml.edges.map(({ node }) => (




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
    
      <>
      <div className="rounded-lg shadow hidden lg:block lg:col-span-3 xl:col-span-3">
      <div className="pt-5">
        <p
          className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
          id="Useful Resources for Your Toolbox"
        >
          Follow on Social Media
        </p>
        <div className="mt-3 space-y-2" aria-labelledby="Valuable Resources for Your Work">
        {menuLinks}
        </div>
      </div>
      
      
      
      </div>
      
      </>
        
      
    
  )
}

export default RMenu
