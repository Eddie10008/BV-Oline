'use client';

interface SalesChartProps {
  sellerId: string;
}

export default function SalesChart({ sellerId }: SalesChartProps) {
  // This is a placeholder chart component
  // In a real implementation, you would fetch sales data and render a proper chart
  // using libraries like Chart.js, Recharts, or similar

  const mockData = [
    { month: 'Jan', sales: 12000 },
    { month: 'Feb', sales: 19000 },
    { month: 'Mar', sales: 15000 },
    { month: 'Apr', sales: 22000 },
    { month: 'May', sales: 18000 },
    { month: 'Jun', sales: 25000 },
  ];

  const maxSales = Math.max(...mockData.map(d => d.sales));

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Sales Overview</h3>
        <p className="text-sm text-gray-600 mt-1">Last 6 months</p>
      </div>
      
      <div className="p-6">
        <div className="flex items-end justify-between space-x-2 h-48">
          {mockData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full bg-gray-200 rounded-t">
                <div
                  className="bg-indigo-600 rounded-t transition-all duration-300"
                  style={{
                    height: `${(data.sales / maxSales) * 100}%`,
                    minHeight: '4px',
                  }}
                />
              </div>
              <div className="mt-2 text-xs text-gray-500">{data.month}</div>
              <div className="text-xs font-medium text-gray-900">
                ₹{(data.sales / 1000).toFixed(1)}k
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Total Sales: ₹{mockData.reduce((sum, d) => sum + d.sales, 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
