export const Cell = ({ filled, special }) => {
  let baseOuter = "w-3 h-[7px] flex items-center justify-center";
  let baseInner = "h-[1px] w-[6px]";

  if (filled) {
    if (special) {
      baseOuter = `${baseOuter} bg-yellow-800`;
      baseInner = `${baseInner} bg-gray-900`;
    }
    if (!special) {
      baseOuter = `${baseOuter} bg-blue-900`;
      baseInner = `${baseInner} bg-gray-900`;
    }
  }

  if (!filled) {
    if (special) {
      baseOuter = `${baseOuter} bg-gray-900 border border-yellow-900`;
      baseInner = `${baseInner} bg-yellow-900`;
    }
    if (!special) {
      baseOuter = `${baseOuter} bg-gray-900 border border-gray-700`;
      baseInner = `${baseInner} bg-gray-700`;
    }
  }

  return (
    <div className={baseOuter}>
      <div className={baseInner} />
    </div>
  );
};
