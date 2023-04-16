import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataYaml {
        edges {
          node {
            id
            Generator {
              link
              name
            }
            Calculator {
              link
              name
            }
            Converter {
              link
              name
            }
            Encoder {
              link
              name
            }
            Decoder {
              link
              name
            }
          }
        }
      }
    }
  `)

  const ToolsList = ({ data }) => {
    const node = data.allDataYaml.edges[0].node

    return (
      <div>
        {Object.keys(node).map(key => {
          if (key !== "id") {
            const tools = node[key]
            return (
              <div key={key}>
                <p class="px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id={key}>{key}</p>
                {tools.map(tool => (
                  <Link
                    key={tool.link}
                    to={tool.link}
                    className="w-full block  px-4 py-2 border-b text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    aria-current={tool.current ? 'page' : undefined}
                  >
                    <span className="focus:text-gray-400  hover:text-purple-800 text-gray-600 truncate">{tool.name}</span>
                  </Link>
                ))}
              </div>
            )
          }
          return null
        })}
      </div>
    )
  }

  return <ToolsList data={data} />
}

export default Menu
