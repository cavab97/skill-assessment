import { useState } from "react";
function TwcssText({ to, children, className }) {
  return (
    <text href={to} className={className}>
      {children}
    </text>
  );
}
export default function ({ className, children }) {
  return <TwcssText className={className} children={children} />;
}
