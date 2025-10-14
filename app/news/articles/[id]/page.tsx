// // app/news/articles/[id]/page.jsx
// import Image from 'next/image'
// import Link from 'next/link'
// import { getArticleById } from '../../../data/articles'

// export default function ArticlePage({ params }) {
//   const article = getArticleById(params.id)
  
//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
//           <p className="text-gray-600 mb-6">The article you&apos;re looking for doesn&apos;t exist or has been removed.</p>
//           <Link href="/news" className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors">
//             ← Back to News
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-6 py-12 max-w-4xl">
        
//         {/* Back Button */}
//         <Link href="/news" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8 font-medium">
//           <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//           </svg>
//           Back to News
//         </Link>
        
//         {/* Article Header */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
//           <Image
//             src={article.image}
//             alt={article.title}
//             width={800}
//             height={400}
//             className="w-full h-64 md:h-96 object-cover"
//           />
//           <div className="p-8">
//             <div className="flex items-center mb-4">
//               <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                 article.category === 'education' 
//                   ? 'bg-blue-100 text-blue-800'
//                   : article.category === 'updates'
//                   ? 'bg-green-100 text-green-800'
//                   : 'bg-gray-100 text-gray-800'
//               }`}>
//                 {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
//               </span>
//               <span className="text-gray-500 ml-4 text-sm">{article.date}</span>
//               <span className="text-gray-500 ml-4 text-sm">•</span>
//               <span className="text-gray-500 ml-2 text-sm">{article.readTime}</span>
//             </div>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
//               {article.title}
//             </h1>
//             <p className="text-gray-600 text-lg">{article.excerpt}</p>
//             <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
//               <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
//                 <span className="text-white text-sm font-bold">
//                   {article.author.charAt(0)}
//                 </span>
//               </div>
//               <span className="text-gray-700 ml-3 font-medium">By {article.author}</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Article Content */}
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <div 
//             className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700"
//             dangerouslySetInnerHTML={{ __html: article.content }}
//           />
//         </div>

//         {/* Share & Navigation */}
//         <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Share this article</h3>
//               <p className="text-gray-600 text-sm">Help spread awareness about menstrual equity</p>
//             </div>
//             <div className="flex space-x-3">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
//                 Share on Facebook
//               </button>
//               <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors text-sm">
//                 Share on Twitter
//               </button>
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }