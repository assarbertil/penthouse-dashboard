import ElementHeader from "./ElementHeader";

export const ElementContainer = ({ children, title, headerColor, header }) =>
  header ? (
    <>
      <ElementHeader title={title} color={headerColor} />
      <div
        style={{ height: "calc(100% - 3rem)" }}
        className="w-full overflow-auto"
      >
        {children}
      </div>
    </>
  ) : (
    <div className="w-full h-full overflow-auto">{children}</div>
  );
