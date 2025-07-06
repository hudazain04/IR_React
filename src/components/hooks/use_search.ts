import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios";
import { CloudCog } from "lucide-react";
import type { SearchResult } from "../../pages";
import { useDataContext } from "../../main";

interface SearchPayload {
  query: string;
  algorithm: string;
  dataset: string;
  top_k : number
}


export const useSearchMutation = () => {
    const {setData}  =   useDataContext()
  return useMutation({
    mutationKey : ["submit-form"],
    mutationFn: async (data: SearchPayload) => {
      const response = await axios.post("http://127.0.0.1:8000/search", null , {
        params : {
            ...data
        }
      });
      return response.data;
    },

     onSuccess : (res : AxiosResponse<SearchResult[]>) =>  {
        setData(res)
        console.log(res)
    },
    onError : (err) => {
        console.log(err)
    }
  });
  
};
