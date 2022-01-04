import { motion } from "framer-motion";
import { item } from "./animations";
import Image from "next/image";

export const ArticleItem = ({ imgSrc, articleTitle, articleUrl, source }) => (
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
      <div className="relative flex items-center w-full">
        <Image
          className="absolute"
          src={`/api/imageProxy?url=${imgSrc}`}
          objectFit="cover"
          alt=""
          height={100}
          width={200}
        />
        <div className="absolute w-full h-full bg-blue-800 bg-opacity-50 mix-blend-multiply" />
        <div className="absolute w-full h-full bg-blue-800 bg-opacity-50 mix-blend-color" />
      </div>
    </div>
  </motion.div>
);
