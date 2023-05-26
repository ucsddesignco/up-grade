import React from "react";
import "./Column.scss";

export interface ColumnProps {
  /** Number of columns spanned */
  span?: number;
  /** Optional custom styling */
  style?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[];
}

const Column = ({ children, span = 1, style }: ColumnProps) => {
  return (
    <div
      className="dc-column"
      style={
        {
          "--span": span,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Column;
