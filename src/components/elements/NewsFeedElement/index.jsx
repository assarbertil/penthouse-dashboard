import { motion } from "framer-motion";

import useNews from "@/hooks/useNews";
import ElementHeader from "../utilities/ElementHeader";

export default function NewsFeedElement() {
  const { data } = useNews();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
        type: "tween",
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: 500,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        opacity: { duration: 0.75 },
        x: { duration: 1 },
        ease: [0.6, 0.1, 0.9, 0.4],
      },
    },
  };

  const ArticleItem = ({ imgSrc, articleTitle, articleUrl, source }) => (
    <motion.div
      className="relative flex w-full pb-4 text-xs text-gray-300 gap-x-2"
      variants={item}
    >
      <div className="absolute px-1 text-blue-700 bg-gray-900 left-2 -top-2">
        {source}
      </div>
      <div className="w-4/6 p-3 border border-r-0 border-gray-600">
        <a className="line-clamp-2" href={articleUrl}>
          {articleTitle}
        </a>
      </div>
      <div className="flex items-center justify-center w-10 border-t border-b border-blue-700">
        <div className="flex items-center justify-center w-full h-full text-blue-700" />
      </div>
      <div className="flex items-center justify-center w-1/6 p-1 border border-l-0 border-gray-600 place-items-center">
        <div className="relative w-full">
          <div className="absolute w-full bg-blue-800 bg-opacity-50 h-11 mix-blend-multiply" />
          <div className="absolute w-full bg-blue-800 bg-opacity-50 h-11 mix-blend-color" />
          <img className="object-cover w-full h-11" src={imgSrc} alt="" />
        </div>
      </div>
    </motion.div>
  );

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
                imgUrl={
                  article.imgUrl ? article.imgUrl : "/newsFallbackImg.png"
                }
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
