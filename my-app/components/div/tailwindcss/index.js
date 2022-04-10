import { useState } from "react";
function TwcssDiv({ to, children, className }) {
  return (
    <div href={to} className={className}>
      {children}
    </div>
  );
}
export default function ({ className, children }) {
  return <TwcssDiv className={className} children={children} />;
}
