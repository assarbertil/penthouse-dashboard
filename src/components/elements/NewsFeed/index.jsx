import { motion } from "framer-motion";
import { container } from "./animations";
import { ArticleItem } from "./ArticleItem";
import useNews from "@/hooks/fetching/useNews";
import ElementHeader from "../utilities/ElementHeader";

export default function NewsFeedElement() {
  const { data } = useNews();

  return (
    <>
      <ElementHeader title="News Feed" color="bg-blue-800" />
      {data?.status === "ok" && (
        <motion.div
          className="pl-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {data?.status === "ok" &&
            data.articles.map(article => (
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
  );
}
