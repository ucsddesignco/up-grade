import React from "react";
import "./Columns.scss";
import Column from "./subcomponents/Column";
import { clsx } from "clsx";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export interface ColumnsProps {
  className?: string;
  /** Viewport width (px) at which the columns are collapsed vertically */
  collapseBreakpoint: number;
  /** The number of columns */
  count: number;
  /** The desktop and mobile space (px) between columns */
  space?: [number, number];
  /** Optional custom styling */
  style?: React.CSSProperties;
  /** Vertical alignment of columns of varying heights */
  verticalAlignment?: `top` | "center" | "bottom";
  children?: JSX.Element | JSX.Element[];
}

/** `Columns` and `Column` are layout components that display elements side by side.*/
const Columns = ({
  children,
  className,
  collapseBreakpoint,
  count,
  space = [0, 0],
  style,
  verticalAlignment = "top",
}: ColumnsProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth > 600;
  let alignment;
  switch (verticalAlignment) {
    case "top": {
      alignment = "start";
      break;
    }
    case "center": {
      alignment = "center";
      break;
    }
    case "bottom": {
      alignment = "end";
      break;
    }
  }

  return (
    <div
      className={clsx(
        "dc-columns",
        // collapseBreakpoint && "dc-columns__breakpoint--" + collapseBreakpoint,
        className
      )}
      style={
        {
          gridTemplateColumns:
            windowWidth > collapseBreakpoint ? `repeat(${count}, 1fr)` : "1fr",
          gap: isMobile ? space[0] : space[1],
          alignItems: alignment,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

Columns.Column = Column;

export default Columns;
