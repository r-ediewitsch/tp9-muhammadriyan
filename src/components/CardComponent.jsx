export default function ArticleCard({ result }) {
    return (
      <div className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
          <img 
            src={result.image} 
            alt={result.title} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <span className="text-xs font-medium text-white px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500">
              {result.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {result.title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            {result.body}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-xs">{result.id}</span>
          </div>
        </div>
      </div>
    );
}