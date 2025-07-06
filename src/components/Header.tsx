
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-white/20 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">DataSight Search</h2>
              <p className="text-sm text-gray-600">Information Retrieval System</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <span>Vector Space Model</span>
            <span>•</span>
            <span>Word2Vec</span>
            <span>•</span>
            <span>Hybrid Search</span>
          </div>
        </div>
      </div>
    </header>
  );
};
