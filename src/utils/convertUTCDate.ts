export const convertUTCdate = (unix_timestamp: number) => {
  const date = new Date(unix_timestamp * 1000)
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}
