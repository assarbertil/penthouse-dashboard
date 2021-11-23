import { motion } from "framer-motion";
import DropboxUsage from "./DropboxUsage";
import ElementHeader from "../utilities/ElementHeader";

export default function BrandingElement() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = {
    type: "tween",
    ease: "easeInOut",
    duration: 1,
    delay: 0.2,
  };

  const Divider = () => (
    <div className="w-px min-h-full border-t-4 border-b-4 border-gray-400" />
  );
  const Cell = ({ title, content }) => (
    <div className="p-2">
      <h5 className="mb-1 text-gray-500">{title}</h5>
      <span className="text-gray-500">{content}</span>
    </div>
  );

  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={variants}
      transition={transition}
      className="h-full"
    >
      <ElementHeader />
      <div className="flex justify-between w-full overflow-hidden text-xs tracking-wide uppercase align-middle border-t border-b border-gray-400">
        <Divider />
        <Cell content={<DropboxUsage />} title="DB Usage" />
        <Divider />
        <Cell content={<DropboxUsage />} title="DB Usage" />
        <Divider />
        <Cell content={<DropboxUsage />} title="DB Usage" />
        <Divider />
        <Cell content={<DropboxUsage />} title="DB Usage" />
        <Divider />
        <Cell content={<DropboxUsage />} title="DB Usage" />
        <Divider />
      </div>
    </motion.div>
  );
}
