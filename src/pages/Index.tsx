
import { useState } from "react";
import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { SearchResults } from "../components/SearchResult";

export interface SearchResult {
  doc_id : string;
  text: string;
  score: number;
}

export interface SearchParams {
  dataset: string;
  query: string;
  model: string;
  additional_features: boolean;
}

const Index = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [data , setData] = useState<any>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl h-16 font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              IR Search Engine
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced Information Retrieval system with multiple models and datasets. 
              Enter your query and explore semantic similarities.
            </p>
          </div>

          {/* Search Form */}
          <SearchForm />

            <div className="mt-12">
              <SearchResults results={data} />
            </div>
        
        </div>
      </main>
    </div>
  );
};

export default Index;
