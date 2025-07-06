
import { FileText, TrendingUp } from "lucide-react";
import type { SearchResult } from "../pages";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useDataContext } from "../main";

interface SearchResultsProps {
  results: SearchResult[];
}

export const SearchResults = ({ results }: SearchResultsProps) => {
  const {data} = useDataContext()

  console.log(data)
  if (false) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Results</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-white/70 border-white/20">
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <FileText className="w-16 h-16 mx-auto" />
        </div>
        <h3 className="text-xl font-medium text-gray-600 mb-2">No Results Found</h3>
        <p className="text-gray-500">Try adjusting your search query or selecting a different model.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Search Results</h2>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          {data.length} documents found
        </Badge>
      </div>

      <div className="grid gap-4">
        {data.map((result, index) => (
          <Card 
            key={result.doc_id} 
            className="bg-white/80 border-white/20 hover:bg-white/90 transition-all duration-200 hover:shadow-lg"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span className="font-mono">{result.doc_id}</span>
                  <span className="text-gray-400">•</span>
                  <span>Rank #{index + 1}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <Badge 
                    variant="outline" 
                    className={`
                      ${result.score >= 0.9 ? 'border-green-500 text-green-700 bg-green-50' : 
                        result.score >= 0.8 ? 'border-yellow-500 text-yellow-700 bg-yellow-50' : 
                        'border-blue-500 text-blue-700 bg-blue-50'}
                    `}
                  >
                    {(result.score * 100).toFixed(1)}% match
                  </Badge>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {result.text}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Similarity Score: {result.score.toFixed(4)}</span>
                  <span>Retrieved from selected dataset</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
