'use client';

import React, { useState, useRef, useCallback } from 'react';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  status: 'uploading' | 'success' | 'error';
  progress: number;
  file: File;
}

const PDFs = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file: File): boolean => {
    if (file.type !== 'application/pdf') {
      alert('దయచేసి PDF ఫైల్‌లను మాత్రమే అప్‌లోడ్ చేయండి');
      return false;
    }
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      alert('ఫైల్ పరిమాణం 10MB కంటే తక్కువగా ఉండాలి');
      return false;
    }
    return true;
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        setUploadedFiles(prev => prev.map(file => 
          file.id === fileId 
            ? { ...file, status: 'success', progress: 100 }
            : file
        ));
        clearInterval(interval);
      } else {
        setUploadedFiles(prev => prev.map(file => 
          file.id === fileId 
            ? { ...file, progress: Math.round(progress) }
            : file
        ));
      }
    }, 200);
  };

  const handleFiles = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files);
    
    fileArray.forEach(file => {
      if (validateFile(file)) {
        const newFile: UploadedFile = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          status: 'uploading',
          progress: 0,
          file
        };
        
        setUploadedFiles(prev => [...prev, newFile]);
        simulateUpload(newFile.id);
      }
    });
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 mobile-container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="mobile-heading font-bold gradient-text mb-4">
            PDF అప్‌లోడర్
          </h1>
          <p className="text-gray-600 mobile-text">
            మీ PDF ఫైల్‌లను సురక్షితంగా అప్‌లోడ్ చేయండి
          </p>
        </div>

        {/* Upload Area */}
        <div className="animate-slide-in-left mb-8">
          <div
            className={`
              relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer
              ${isDragOver 
                ? 'border-blue-500 bg-blue-50 scale-105' 
                : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50'
              }
              glass card-hover
            `}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={openFileDialog}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,application/pdf"
              onChange={handleFileInput}
              className="hidden"
            />
            
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse-slow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  PDF ఫైల్‌లను ఇక్కడ డ్రాగ్ చేయండి
                </h3>
                <p className="text-gray-500 mobile-text">
                  లేదా <span className="text-blue-600 font-medium">ఫైల్‌లను ఎంచుకోండి</span>
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <span>గరిష్ట పరిమాణం: 10MB</span>
                <span>•</span>
                <span>సపోర్ట్: PDF మాత్రమే</span>
              </div>
            </div>
          </div>
        </div>

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className="animate-slide-in-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              అప్‌లోడ్ చేసిన ఫైల్‌లు ({uploadedFiles.length})
            </h2>
            
            <div className="space-y-4">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-fade-in-up card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-800 truncate max-w-xs">
                          {file.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {file.status === 'uploading' && (
                        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      )}
                      
                      {file.status === 'success' && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                      
                      <button
                        onClick={() => removeFile(file.id)}
                        className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors touch-button focus-ring rounded"
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                      style={{ width: `${file.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="mt-2 flex justify-between items-center text-sm">
                    <span className="text-gray-500">
                      {file.status === 'uploading' && `అప్‌లోడ్ అవుతోంది... ${file.progress}%`}
                      {file.status === 'success' && 'అప్‌లోడ్ పూర్తయింది'}
                      {file.status === 'error' && 'అప్‌లోడ్ విఫలమైంది'}
                    </span>
                    
                    {file.status === 'success' && (
                      <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors focus-ring">
                        వీక్షించండి
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {uploadedFiles.length === 0 && (
          <div className="text-center py-12 animate-fade-in-up">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              ఇంకా ఫైల్‌లు అప్‌లోడ్ చేయలేదు
            </h3>
            <p className="text-gray-500">
              మీ మొదటి PDF ఫైల్‌ని అప్‌లోడ్ చేయడానికి పైన ఉన్న ప్రాంతాన్ని ఉపయోగించండి
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFs;