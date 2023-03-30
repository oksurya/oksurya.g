import React, { useState } from 'react'
import axios from 'axios'
const SearchPage = ({ data }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const search = async (event) => {
    event.preventDefault()
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyALQVioHZu6i7xeo_LKOG5nN7jFcQF_5d8&cx=222e3e47a9bfb4a40&q=${query}`
    )
    setResults(response.data.items)
  }

  return (
    
    <div>
      <form onSubmit={search} className="my-5 flex max-w-xl items-center px-6">
    <div class="w-full max-w-xs md:max-w-sm">
        <div class="relative mt-1 rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                    </path></svg></div>
<input required="" value={query} onChange={(e) => setQuery(e.target.value)} type="text" name="query" id="query" class="block w-full rounded-md border-gray-300 pl-10 text-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Type your search query here.."/></div>
    </div>
    <button type="submit" class="mt-0 ml-3 inline-flex w-auto items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-0">Search</button>
    
    </form>
      <ul class="divide-y divide-gray-200 overflow-y-auto pb-12">
    
      {results.map((result) => (
        
          <li key={result.link}>
        <div class="group relative flex items-center px-6 py-4">
        <a rel="nofollow" href={`/redirect/?url=${result.link}`}>                <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true"></div>
                <div class="relative flex min-w-0 flex-1 items-center">
                    <div class="truncat">
                        <p class="truncatex text-sm font-medium text-gray-800">{result.title}</p>
                        <p class="truncatex text-sm text-gray-500">{result.snippet}</p>
                    </div>
                </div>
            </a>
        </div>
    </li>
      
      ))}
      </ul>
    </div>
   
  )
}

export default SearchPage
