'use client'
import React from 'react'
import { pdfFiles } from '@/assets/pdf'

const PDFs = () => {
  const handleDownload = (filename: string, title: string) => {
    const link = document.createElement('a')
    link.href = filename
    link.download = `${title}.pdf`
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Military PDFs
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access important military documents, manuals, and guidelines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pdfFiles.map((pdf) => (
            <div key={pdf.id} className="group bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {pdf.category}
                  </span>
                  <span className="text-gray-500 text-sm">{pdf.size}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {pdf.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {pdf.description}
                </p>
                
                <button 
                  onClick={() => handleDownload(pdf.filename, pdf.title)}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                >
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PDFs