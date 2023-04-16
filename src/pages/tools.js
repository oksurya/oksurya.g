import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query MyQuery {
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
`

const ToolsList = ({ data }) => {
  const node = data.allDataYaml.edges[0].node

  return (
    <div>
      {Object.keys(node).map(key => {
        if (key !== "id") {
          const tools = node[key]
          return (
            <div key={key}>
              <h2>{key}</h2>
              <ul>
                {tools.map(tool => (
                  <li key={tool.name}>
                    <a href={tool.link}>{tool.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default ToolsList
