import { useState, useEffect } from "react";

import useDropboxUsage from "../../../hooks/useDropboxUsage";

export default function DropboxUsage() {
  const [usageFormatted, setUsageFormatted] = useState("1");
  const [allocatedFormatted, setAllocatedFormatted] = useState("1");

  const { data } = useDropboxUsage();

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  useEffect(() => {
    if (data) {
      setUsageFormatted(formatBytes(data?.used, 1));
      setAllocatedFormatted(formatBytes(data?.allocation.allocated, 1));
    }
  }, [data]);

  return data ? (
    <>
      {usageFormatted} / {allocatedFormatted}
    </>
  ) : (
    <h1>error</h1>
  );
}
