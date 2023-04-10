/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
const people = [
  {
    name: 'Jayasurya Mailsamy',
    email: 'jayasuryaofficial1@gmail.com',
    role: 'Editor',
    imageUrl:
      'https://pbs.twimg.com/profile_images/1595420759165632512/zlS7jyNx_400x400.jpg',
  },
  // More people...
]

const Bio = () => {

  return (



    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
    {people.map((person) => (
      <div
        key={person.email}
        className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <a href="https://twitter.com/jayasuryatweet" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500 truncate">{person.role}</p>
          </a>
        </div>
      </div>
    ))}
  </div>


   
  )
}

export default Bio
