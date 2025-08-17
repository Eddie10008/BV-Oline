export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Product Research</h1>
          <p className="text-gray-600 mt-2">
            In-depth analysis and insights to optimize your product strategy
          </p>
        </div>
      </div>

      {/* Research Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Research Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-medium text-green-900 mb-2">Premium Silk Sarees</h3>
            <p className="text-sm text-green-700 mb-3">High demand with 25% higher margins</p>
            <div className="text-sm text-green-600">
              <div>Demand: Very High</div>
              <div>Price Range: ₹8,000 - ₹25,000</div>
              <div>Growth: +18%</div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">Contemporary Lehengas</h3>
            <p className="text-sm text-blue-700 mb-3">Modern designs gaining popularity</p>
            <div className="text-sm text-blue-600">
              <div>Demand: High</div>
              <div>Price Range: ₹5,000 - ₹15,000</div>
              <div>Growth: +22%</div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-medium text-yellow-900 mb-2">Traditional Salwar Kameez</h3>
            <p className="text-sm text-yellow-700 mb-3">Demand decreasing, needs modernization</p>
            <div className="text-sm text-yellow-600">
              <div>Demand: Medium</div>
              <div>Price Range: ₹2,000 - ₹8,000</div>
              <div>Growth: -8%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Seasonal Trends</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Wedding Season (Oct-Dec)</span>
                <span className="text-green-600 font-medium">Very High</span>
              </div>
              <div className="flex justify-between">
                <span>Festive Season (Aug-Nov)</span>
                <span className="text-blue-600 font-medium">High</span>
              </div>
              <div className="flex justify-between">
                <span>Summer (Mar-Jun)</span>
                <span className="text-yellow-600 font-medium">Medium</span>
              </div>
              <div className="flex justify-between">
                <span>Monsoon (Jul-Sep)</span>
                <span className="text-gray-600 font-medium">Low</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Price Segments</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Budget (₹1,000-₹3,000)</span>
                <span className="text-gray-600">35% market share</span>
              </div>
              <div className="flex justify-between">
                <span>Mid-Range (₹3,000-₹8,000)</span>
                <span className="text-gray-600">45% market share</span>
              </div>
              <div className="flex justify-between">
                <span>Premium (₹8,000-₹20,000)</span>
                <span className="text-gray-600">15% market share</span>
              </div>
              <div className="flex justify-between">
                <span>Luxury (₹20,000+)</span>
                <span className="text-gray-600">5% market share</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Strategic Recommendations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Short-term Actions (1-3 months)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Optimize product listings with better images and descriptions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Focus on wedding season inventory preparation</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Implement customer feedback collection system</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Launch promotional campaigns for festive season</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3">Long-term Strategy (6-12 months)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Develop exclusive designer collaborations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Expand premium product portfolio</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Implement advanced inventory management</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Build customer loyalty program</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
