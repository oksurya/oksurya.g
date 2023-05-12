import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, graphql } from "gatsby"

export const query = graphql`
  query MyQuery {
    allDataYaml {
        edges {
          node {
            id
            SEO_Tools {
              link
              name
            }
            Other_Tools {
              link
              name
            }
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

    <Layout>
      <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Free Online Tools</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">Complete Your Tasks Quickly and Easily with Our Free Online Tools on Tools.js</p>
      </header>
      <div class="mmax-w-2xl prose mx-auto mt-10 lg:text-lg">
        <div class="relative px-4 sm:px-6 lg:px-3 flex flex-col gap-2">
    <div>
    {Object.keys(node).map((key) => {
  if (key !== "id") {
    const tools = node[key];
    const formattedKey = key.replace("_", " ");

    return (
      <div key={key} className="mb-6">
        <h2 className="px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{formattedKey}</h2>
        <ul>
          {tools.map((tool) => (
            <li key={tool.name} className="mb-2">

<Link class="w-full block  px-4 py-2 border-b text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" to={tool.link}>
  <span class="focus:text-gray-400  hover:text-purple-800 text-gray-600 truncate">{tool.name}</span></Link>

              
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
})}

    </div></div></div>
    </Layout>
  )
}
export const Head = () => <Seo title="Free Online Tools - Converter, Generator, Editor, Calculator, Encoder, Decoder, and More" description="Discover a wide range of free online tools such as a converter, generator, editor, calculator, encoder, decoder, and more on Tools.js. Get access to a variety of handy tools that will help you complete your tasks quickly and easily."/>

export default ToolsList
