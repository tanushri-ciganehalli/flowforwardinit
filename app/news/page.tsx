'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPublishedArticles, getFeaturedArticle, getArticlesByCategory } from '../data/articles'
import { getUpdates } from '../data/updates'

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Get articles from data file
  const featuredArticle = getFeaturedArticle()
  const allArticles = getPublishedArticles()
  
  // Filter articles by category
  const filteredArticles = selectedCategory === 'all' 
    ? allArticles.filter(article => article.id !== featuredArticle.id) // Exclude featured article
    : getArticlesByCategory(selectedCategory)

  // Sample events and updates (you can move these to a separate data file later)
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Education Workshop",
      date: "March 25, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center, Main St",
      type: "workshop"
    },
    {
      id: 2,
      title: "Monthly Product Drive",
      date: "April 1, 2025", 
      time: "10:00 AM - 6:00 PM",
      location: "Various Locations",
      type: "drive"
    },
    {
      id: 3,
      title: "Volunteer Training Session",
      date: "April 8, 2025",
      time: "6:00 PM - 8:00 PM", 
      location: "Flow Forward HQ",
      type: "training"
    }
  ]
  const recentUpdates = getUpdates()
  // const recentUpdates = [
  //   {
  //     id: 1,
  //     title: "1,000 Product Milestone Reached!",
  //     date: "March 12, 2025",
  //     content: "We've successfully distributed over 1,000 menstrual products this month!"
  //   },
  //   {
  //     id: 2,
  //     title: "New Chapter Opens in Sacramento",
  //     date: "March 10, 2025", 
  //     content: "Excited to welcome our newest chapter led by passionate student advocates."
  //   },
  //   {
  //     id: 3,
  //     title: "Media Feature in Local News",
  //     date: "March 8, 2025",
  //     content: "Flow Forward was featured on Channel 7 News discussing period poverty awareness."
  //   }
  // ]

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'education', name: 'Educational' },
    { id: 'updates', name: 'Updates' },
    { id: 'events', name: 'Events' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-4">News & Updates</h1>
          <p className="text-xl text-center opacity-90 max-w-2xl mx-auto">
            Stay informed about our latest initiatives, educational resources, and community impact.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Featured Article */}
        {featuredArticle && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Story</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      featuredArticle.category === 'education' 
                        ? 'bg-blue-100 text-blue-800'
                        : featuredArticle.category === 'updates'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {featuredArticle.category.charAt(0).toUpperCase() + featuredArticle.category.slice(1)}
                    </span>
                    <span className="text-gray-500 ml-4 text-sm">{featuredArticle.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link href={`/news/articles/${featuredArticle.id}`} 
                          className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                      Read More
                    </Link>
                    <span className="text-gray-500 text-sm">{featuredArticle.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Main Content Grid */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          
          {/* Articles Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Latest Articles</h2>
              
              {/* Category Filter */}
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="space-y-8">
              {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            article.category === 'education' 
                              ? 'bg-blue-100 text-blue-800'
                              : article.category === 'updates'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                          </span>
                          <span className="text-gray-500 ml-3 text-sm">{article.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <Link href={`/news/articles/${article.id}`} 
                                className="text-pink-600 hover:text-pink-700 font-medium">
                            Read More →
                          </Link>
                          <span className="text-gray-500 text-sm">{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No articles found in this category.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-12 lg:mt-0">
            
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-gray-800">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date}</p>
                    <p className="text-sm text-gray-600">{event.time}</p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>
                ))}
              </div>
              <Link href="/events" 
                    className="inline-block mt-4 text-pink-600 hover:text-pink-700 font-medium">
                View All Events →
              </Link>
            </div>

            {/* Recent Updates */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Updates</h3>
              <div className="space-y-4">
                {recentUpdates.map(update => (
                  <div key={update.id} className="pb-4 border-b border-gray-100 last:border-b-0">
                    <h4 className="font-semibold text-gray-800 mb-1">{update.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{update.content}</p>
                    <span className="text-xs text-gray-500">{update.date}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}