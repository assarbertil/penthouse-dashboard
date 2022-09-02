import { motion } from "framer-motion"
import { container } from "./animations"
import { ArticleItem } from "./ArticleItem"
import { useNews } from "@/hooks/fetching/useNews"
import ElementHeader from "../utilities/ElementHeader"

export const NewsFeed = () => {
  const { news } = useNews()

  return (
    <>
      <ElementHeader title="News Feed" color="bg-blue-800" />
      {news?.status === "ok" && (
        <motion.div
          className="pl-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {news?.status === "ok" &&
            news.articles.map((article) => (
              <ArticleItem
                key={article.url}
                articleTitle={article.title}
                articleUrl={article.url}
                source={article.source.name}
                imgSrc={
                  article.urlToImage
                    ? article.urlToImage
                    : "/newsFallbackImg.png"
                }
              />
            ))}
        </motion.div>
      )}
    </>
  )
}
