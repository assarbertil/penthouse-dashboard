import ElementHeader from "./ElementHeader";

export const ElementContainer = ({ children, title, headerColor, header }) =>
  header ? (
    <>
      <ElementHeader title={title} color={headerColor} />
      <div
        style={{ height: "calc(100% - 3rem)" }}
        className="flex flex-col w-full overflow-auto"
      >
        {children}
      </div>
    </>
  ) : (
    <div className="flex flex-col w-full h-full overflow-auto">{children}</div>
  );
