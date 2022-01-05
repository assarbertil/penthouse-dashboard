import Image from "next/image";
import { useEffect, useState } from "react";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";

import Logo from "@/public/assets/icons/dashboard-block_xl-dark.svg";
import { useAllApiData } from "@/hooks/useAllApiData";

const Error = ({ children }) => <div className="text-red-600">{children}</div>;

export default function SplashScreen({ children }) {
  const [show, setShow] = useState(false);
  // const { data, errors } = useAllApiData();
  const data = "hej";

  const controls = useAnimation();
  useEffect(() => controls.start({ opacity: 1 }), [controls]);
  useEffect(() => {
    if (!data) return;

    // If all data is loaded, fade out the splash screen
    controls.start({ opacity: 0 });
    setInterval(() => setShow(true), 1000);
  }, [controls, data]);

  if (process.env.NODE_ENV === "development") return children;

  if (show) {
    return children;
  } else {
    return (
      <motion.div
        className="flex flex-col items-center justify-center h-screen"
        animate={controls}
        initial={{ opacity: 0 }}
        transition={{
          type: "tween",
          ease: "backIn",
          duration: 0.5,
        }}
      >
        <Image src={Logo} alt="" height={64} layout="fixed" />

        {errors && (
          <>
            <div className="my-4">
              {errors.map((i, index) => {
                return i === null ? null : (
                  <Error key={index}>{i.message}</Error>
                );
              })}
            </div>

            <button
              className="px-3 py-1 text-gray-900 bg-red-600"
              onClick={e => {
                e.preventDefault();
                controls.start({ opacity: 0 });
                setInterval(() => setShow(true), 1000);
              }}
            >
              proceed
            </button>
          </>
        )}
      </motion.div>
    );
  }
}
