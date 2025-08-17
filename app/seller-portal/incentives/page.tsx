export default function IncentivesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Seller Incentive Program</h1>
          <p className="text-gray-600 mt-2">
            Earn rewards, badges, and exclusive benefits based on your performance
          </p>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Current Status</h2>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 rounded-full px-4 py-2">
                <span className="text-purple-800 font-medium">Gold Seller</span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">1,250</span> points • <span className="font-medium">85%</span> to Platinum
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-600">₹12,500</div>
            <div className="text-sm text-gray-600">Total Rewards Earned</div>
          </div>
        </div>
      </div>

      {/* Rewards Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold">₹</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Cash Rewards</h3>
              <p className="text-sm text-gray-600">₹2,500 available</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>This Month</span>
              <span className="font-medium text-green-600">+₹850</span>
            </div>
            <div className="flex justify-between">
              <span>Total Earned</span>
              <span className="font-medium">₹12,500</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold">🏆</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Badges Earned</h3>
              <p className="text-sm text-gray-600">8 of 15 unlocked</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Recent</span>
              <span className="font-medium text-blue-600">Quality Master</span>
            </div>
            <div className="flex justify-between">
              <span>Next Badge</span>
              <span className="font-medium">Sales Champion</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-600 font-bold">⭐</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Benefits Active</h3>
              <p className="text-sm text-gray-600">5 active benefits</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Commission Rate</span>
              <span className="font-medium text-orange-600">8.5%</span>
            </div>
            <div className="flex justify-between">
              <span>Priority Support</span>
              <span className="font-medium text-green-600">✓ Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement System */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Achievements & Badges</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Earned Badges */}
          <div className="border border-green-200 bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">🏆</span>
              </div>
              <div>
                <h3 className="font-medium text-green-900">First Sale</h3>
                <p className="text-xs text-green-700">Completed first order</p>
              </div>
            </div>
            <div className="text-xs text-green-600">+100 points • Unlocked 2 months ago</div>
          </div>

          <div className="border border-green-200 bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">⭐</span>
              </div>
              <div>
                <h3 className="font-medium text-green-900">Quality Master</h3>
                <p className="text-xs text-green-700">Maintained 4.5+ rating</p>
              </div>
            </div>
            <div className="text-xs text-green-600">+250 points • Unlocked 1 month ago</div>
          </div>

          <div className="border border-green-200 bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">🚀</span>
              </div>
              <div>
                <h3 className="font-medium text-green-900">Fast Shipper</h3>
                <p className="text-xs text-green-700">100% on-time delivery</p>
              </div>
            </div>
            <div className="text-xs text-green-600">+200 points • Unlocked 2 weeks ago</div>
          </div>

          {/* Locked Badges */}
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4 opacity-60">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">🔒</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-600">Sales Champion</h3>
                <p className="text-xs text-gray-500">₹50,000 in sales</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">Progress: ₹35,000 / ₹50,000</div>
          </div>

          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4 opacity-60">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">🔒</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-600">Product Pioneer</h3>
                <p className="text-xs text-gray-500">50+ products listed</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">Progress: 35 / 50 products</div>
          </div>

          <div className="border border-gray-200 bg-gray-50 rounded-lg p-4 opacity-60">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">🔒</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-600">Customer Favorite</h3>
                <p className="text-xs text-gray-500">100+ customer reviews</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">Progress: 75 / 100 reviews</div>
          </div>
        </div>
      </div>

      {/* Performance Tiers */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Tiers & Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="text-center mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-600 font-bold">🥉</span>
              </div>
              <h3 className="font-medium text-gray-900">Bronze</h3>
              <p className="text-xs text-gray-600">0-500 points</p>
            </div>
            <div className="space-y-2 text-xs text-gray-600">
              <div>• 10% commission rate</div>
              <div>• Standard support</div>
              <div>• Basic analytics</div>
            </div>
          </div>

          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <div className="text-center mb-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-yellow-600 font-bold">🥈</span>
              </div>
              <h3 className="font-medium text-yellow-900">Silver</h3>
              <p className="text-xs text-yellow-700">501-1000 points</p>
            </div>
            <div className="space-y-2 text-xs text-yellow-700">
              <div>• 9% commission rate</div>
              <div>• Priority support</div>
              <div>• Advanced analytics</div>
              <div>• Featured listings</div>
            </div>
          </div>

          <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
            <div className="text-center mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 font-bold">🥇</span>
              </div>
              <h3 className="font-medium text-purple-900">Gold</h3>
              <p className="text-xs text-purple-700">1001-2000 points</p>
            </div>
            <div className="space-y-2 text-xs text-purple-700">
              <div>• 8.5% commission rate</div>
              <div>• VIP support</div>
              <div>• Premium analytics</div>
              <div>• Priority placement</div>
              <div>• Early access features</div>
            </div>
          </div>

          <div className="border border-gray-300 bg-gray-100 rounded-lg p-4">
            <div className="text-center mb-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-600 font-bold">💎</span>
              </div>
              <h3 className="font-medium text-gray-900">Platinum</h3>
              <p className="text-xs text-gray-600">2000+ points</p>
            </div>
            <div className="space-y-2 text-xs text-gray-600">
              <div>• 8% commission rate</div>
              <div>• Dedicated manager</div>
              <div>• Custom analytics</div>
              <div>• Top placement</div>
              <div>• Exclusive events</div>
              <div>• Partnership opportunities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Challenges */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Challenges</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-blue-900">Festive Sales Challenge</h3>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Active</span>
            </div>
            <p className="text-sm text-blue-700 mb-3">Boost your sales during the festive season</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Target</span>
                <span className="font-medium">₹25,000</span>
              </div>
              <div className="flex justify-between">
                <span>Current</span>
                <span className="font-medium text-blue-600">₹18,500</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '74%' }}></div>
              </div>
              <div className="text-xs text-blue-600">74% complete • 8 days remaining</div>
            </div>
            <div className="mt-3 text-sm">
              <span className="font-medium text-blue-900">Reward:</span>
              <span className="text-blue-700"> +500 points + ₹1,000 bonus</span>
            </div>
          </div>

          <div className="border border-green-200 bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-green-900">Quality Excellence</h3>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
            </div>
            <p className="text-sm text-green-700 mb-3">Maintain high customer satisfaction</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Target Rating</span>
                <span className="font-medium">4.8+</span>
              </div>
              <div className="flex justify-between">
                <span>Current Rating</span>
                <span className="font-medium text-green-600">4.6</span>
              </div>
              <div className="w-full bg-green-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="text-xs text-green-600">92% complete • 15 days remaining</div>
            </div>
            <div className="mt-3 text-sm">
              <span className="font-medium text-green-900">Reward:</span>
              <span className="text-green-700"> +300 points + Quality Master badge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rewards History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Rewards</h2>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">₹</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Quality Master Badge</div>
                <div className="text-sm text-gray-600">Maintained 4.5+ rating for 30 days</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-green-600">+250 points</div>
              <div className="text-sm text-gray-600">2 days ago</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm">💰</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Cash Reward</div>
                <div className="text-sm text-gray-600">Monthly performance bonus</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-blue-600">+₹850</div>
              <div className="text-sm text-gray-600">1 week ago</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-sm">🏆</span>
              </div>
              <div>
                <div className="font-medium text-gray-900">Fast Shipper Badge</div>
                <div className="text-sm text-gray-600">100% on-time delivery rate</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-purple-600">+200 points</div>
              <div className="text-sm text-gray-600">2 weeks ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
