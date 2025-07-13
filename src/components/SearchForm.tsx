import { useState } from "react";
import { Search, Database, Settings } from "lucide-react";
import type { SearchParams } from "../pages";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectTrigger, SelectValue , SelectItem } from "./ui/select";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useSearchMutation } from "./hooks/use_search";
interface SearchFormProps {
  setData : any
  setHasSearched : any
}

export const SearchForm = () => {
  const [dataset, setDataset] = useState("");
  const [query, setQuery] = useState("");
  const [model, setModel] = useState("");
  const [additionalFeatures, setAdditionalFeatures] = useState(false);

  const { mutate, isPending } = useSearchMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!dataset || !query || !model) {
      alert("Please fill in all required fields");
      return;
    }

    mutate({
      dataset,
      query,
      algorithm: model,
      top_k : 10
    });
  };

  return (
    <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-xl">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dataset Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="dataset" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Database className="w-4 h-4" />
                Dataset
              </Label>
              <Select value={dataset} onValueChange={setDataset} required>
                <SelectTrigger className="bg-white/50 border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                  <SelectValue placeholder="Choose dataset..." />
                </SelectTrigger>
                <SelectContent  className="bg-white border-gray-200">
                  <SelectItem value="beir/quora/dev">quora</SelectItem>
                  <SelectItem value="antique/train">antique</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Model Selection */}
            <div className="space-y-2">
              <Label htmlFor="model" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Retrieval Model
              </Label>
              <Select value={model} onValueChange={setModel} required>
                <SelectTrigger className="bg-white/50 border-gray-200 focus:border-blue-400 focus:ring-blue-400">
                  <SelectValue placeholder="Choose model..." />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="vsm">Vector Space Model (VSM)</SelectItem>
                  <SelectItem value="word2vec">Word2Vec</SelectItem>
                  <SelectItem value="hybrid">Hybrid Approach</SelectItem>
                  <SelectItem value="bm25">BM25 Approach</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Query Input */}
          <div className="space-y-2">
            <Label htmlFor="query" className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search Query
            </Label>
            <Input
              id="query"
              type="text"
              placeholder="Enter your search query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              className="bg-white/50 border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-base py-3"
            />
          </div>

          {/* Additional Features */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="additional-features"
              checked={additionalFeatures}
              onCheckedChange={(checked) => setAdditionalFeatures(checked as boolean)}
              className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label
              htmlFor="additional-features"
              className="text-sm font-medium text-gray-700 cursor-pointer"
            >
              Enable additional features (Vector Store : FAISS)
            </Label>
          </div>

          {/* Submit Button */}
         <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isPending ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Searching...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search Documents
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
