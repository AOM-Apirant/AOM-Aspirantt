import React from 'react'

const WTT = () => {
  const wttTopics = [
    {
      title: "Working Time Table (WTT) - పని సమయ పట్టిక",
      description: "రైల్వేలో రైలు సమయాలను నిర్వహించడానికి ఉపయోగించే ముఖ్యమైన పత్రం",
      icon: "⏰"
    },
    {
      title: "WTT యొక్క నిర్వచనం",
      content: "Working Time Table అనేది రైల్వేలో రైలు సమయాలను, స్టేషన్‌ల మధ్య దూరాలను, స్టాప్‌లను మరియు ఇతర ముఖ్యమైన సమాచారాన్ని కలిగి ఉండే అధికారిక పత్రం."
    },
    {
      title: "WTT యొక్క ముఖ్య లక్షణాలు",
      points: [
        "రైలు సంఖ్యలు మరియు వాటి రకాలు",
        "ప్రారంభ మరియు గమ్య స్టేషన్‌లు",
        "ప్రతి స్టేషన్‌లో ఆగే సమయాలు",
        "రైలు మార్గాలు మరియు దూరాలు",
        "స్పీడ్ లిమిట్స్ మరియు రిస్ట్రిక్షన్స్",
        "క్రాసింగ్ మరియు ఓవర్టేకింగ్ సమయాలు"
      ]
    },
    {
      title: "WTT రకాలు",
      types: [
        {
          name: "Main Line WTT",
          description: "ప్రధాన మార్గాల కోసం"
        },
        {
          name: "Branch Line WTT", 
          description: "శాఖా మార్గాల కోసం"
        },
        {
          name: "Suburban WTT",
          description: "ప్రాంతీయ రైలు సేవల కోసం"
        },
        {
          name: "Freight WTT",
          description: "సరుకు రైలు సేవల కోసం"
        }
      ]
    },
    {
      title: "WTT తయారీ ప్రక్రియ",
      steps: [
        "రైలు మార్గాల విశ్లేషణ",
        "స్టేషన్‌ల మధ్య దూరాల గణన",
        "స్టాప్‌ల సమయాల నిర్ణయం",
        "క్రాసింగ్ సమయాల ప్లానింగ్",
        "స్పీడ్ ప్రొఫైల్స్ నిర్ణయం",
        "అధికారిక ఆమోదం"
      ]
    },
    {
      title: "WTT యొక్క ముఖ్యత",
      importance: [
        "రైలు సేవల యొక్క సకాల నిర్వహణ",
        "ప్రయాణీకుల సౌకర్యం",
        "రైల్వే ఆపరేషన్స్ యొక్క సమర్థత",
        "భద్రతా ప్రమాణాల నిర్వహణ",
        "రిసోర్స్ ఆప్టిమైజేషన్"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">⏰</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Working Time Table
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            రైల్వేలో రైలు సమయాలను నిర్వహించడానికి ఉపయోగించే ముఖ్యమైన పత్రం
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {wttTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Topic Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  {topic.icon && <span className="text-2xl">{topic.icon}</span>}
                  {topic.title}
                </h2>
                {topic.description && (
                  <p className="text-blue-100 mt-2">{topic.description}</p>
                )}
              </div>

              {/* Topic Content */}
              <div className="p-6">
                {topic.content && (
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {topic.content}
                  </p>
                )}

                {topic.points && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">ముఖ్యమైన అంశాలు:</h3>
                    <ul className="space-y-2">
                      {topic.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {topic.types && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">WTT రకాలు:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {topic.types.map((type, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{type.name}</h4>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {topic.steps && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">తయారీ ప్రక్రియ:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {topic.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg">
                          <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {topic.importance && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">ముఖ్యత:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {topic.importance.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
                          <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm">
                            ✓
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center gap-3">
              <span className="text-2xl">💡</span>
              ముఖ్యమైన గమనికలు
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>• WTT అనేది రైల్వే ఆపరేషన్స్ యొక్క ముఖ్యమైన పత్రం</p>
              <p>• ఇది ప్రతి సంవత్సరం అప్‌డేట్ చేయబడుతుంది</p>
              <p>• WTT ప్రకారం రైలు సేవలు నిర్వహించబడతాయి</p>
              <p>• ఇది ప్రయాణీకుల మరియు రైల్వే సిబ్బందికి మార్గదర్శకం</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WTT