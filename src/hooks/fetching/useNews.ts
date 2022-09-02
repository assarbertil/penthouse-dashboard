import useSWR from "swr"

const APIKey = process.env.NEXT_PUBLIC_NEWS_API_KEY

interface NewsResponse {
  status: string
  totalResults: number
  articles: {
    title: string
    url: string
    urlToImage: string
    source: {
      name: string
    }
  }[]
}

export const useNews = () => {
  const { data, error } = useSWR<NewsResponse>(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=9&apiKey=${APIKey}`
  )

  return {
    news: data,
    error,
    isLoading: !error && !data,
  }
}
