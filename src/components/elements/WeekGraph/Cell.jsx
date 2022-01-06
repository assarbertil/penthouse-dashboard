import { useState, useEffect } from "react";
export const Cell = ({ filled = false, special = false }) => {
  const [outer, setOuter] = useState(
    "w-3 h-[7px] flex items-center justify-center"
  );
  const [inner, setInner] = useState("h-[1px] w-[6px]");

  useEffect(() => {
    if (filled) {
      if (special) {
        setOuter(o => `${o} bg-yellow-800`);
        setInner(o => `${o} bg-gray-900`);
      }
      if (!special) {
        setOuter(o => `${o} bg-blue-900`);
        setInner(o => `${o} bg-gray-900`);
      }
    }

    if (!filled) {
      if (special) {
        setOuter(o => `${o} bg-gray-900 border border-yellow-900`);
        setInner(o => `${o} bg-yellow-900`);
      }
      if (!special) {
        setOuter(o => `${o} bg-gray-900 border border-gray-700`);
        setInner(o => `${o} bg-gray-700`);
      }
    }
  }, [filled, special]);

  return (
    <div className={outer}>
      <div className={inner} />
    </div>
  );
};
