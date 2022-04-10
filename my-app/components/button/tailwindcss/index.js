import { useState } from "react";
function TwcssButton({ to, children, className, onClick }) {
  return (
    <button href={to} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
export default function Container({ className, children, onClick }) {
  return (
    <TwcssButton className={className} children={children} onClick={onClick} />
  );
}
