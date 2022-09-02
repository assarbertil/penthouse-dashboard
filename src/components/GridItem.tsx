import { FC, ReactNode } from "react"

interface Props {
  cols: number
  rows: number
  content: ReactNode
  x?: boolean
}

export const GridItem: FC<Props> = ({ cols, rows, content, x = false }) => {
  const colsArr = ["col-span-1", "col-span-2", "col-span-3"]
  const rowsArr = [
    "row-span-1",
    "row-span-2",
    "row-span-3",
    "row-span-4",
    "row-span-5",
    "row-span-6",
  ]

  return (
    <div className={`${colsArr[cols - 1]} ${rowsArr[rows - 1]}`}>
      {!x && content}
    </div>
  )
}
