import * as React from "react"
import Bio from "./bio"

const whoToFollow = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/jayasuryatweet',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/oksurya',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jayasurya_ig',
    },

    // More people...
  ]
  


const RightPage = () => {
  return (
    <aside className="hidden xl:block xl:col-span-4">
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                    <Bio />
                     
                      {whoToFollow.map((user) => (
                      <div className="mt-2">
                        <a
                          href={user.href}
                          className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          {user.name}
                        </a>
                      </div>
                      ))}

                      

                    </div>
                    
                  </div>
                </section>
              </div>
            </aside>
  )
}

export default RightPage
