import Image from "next/image"
import { FC, ReactNode, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Logo from "@/public/assets/icons/dashboard-block_xl-dark.svg"
import { useAllApiData } from "@/hooks/useAllApiData"

interface Props {
  children: ReactNode
}

const Error: FC<Props> = ({ children }) => (
  <div className="text-red-600">{children}</div>
)

export const SplashScreen: FC<Props> = ({ children }) => {
  const [show, setShow] = useState(false)
  const { data, errors } = useAllApiData()

  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1 })
  }, [controls])

  useEffect(() => {
    if (data) {
      // If all data is loaded, fade out the splash screen
      controls.start({ opacity: 0 })
      setInterval(() => setShow(true), 1000)
    }
  }, [controls, data])

  const errorsAsArray = Object.values(errors).filter(
    (error) => error !== undefined
  )

  if (process.env.NODE_ENV === "development") {
    return <>{children}</>
  }

  if (show) {
    return <>{children}</>
  }

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
            {errorsAsArray.map((error, index) => (
              <Error key={index}>{error.message}</Error>
            ))}
          </div>

          <button
            className="px-3 py-1 text-gray-900 bg-red-600"
            onClick={(e) => {
              e.preventDefault()
              controls.start({ opacity: 0 })
              setInterval(() => setShow(true), 1000)
            }}
          >
            proceed
          </button>
        </>
      )}
    </motion.div>
  )
}
