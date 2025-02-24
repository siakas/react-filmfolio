import axios from "axios";
import type { MovieResponse } from "@/types/movie";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_BASE_URL;
const LANGUAGE = process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE;

/** 映画リストを取得 */
export const getMovieList = async (path: string) => {
  try {
    const res = await axios.get<MovieResponse>(`${BASE_URL}${path}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        page: 1,
      },
    });
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};
