import { useState } from "react";
function TwcssInput({ to, className, placeholder }) {
  return <input href={to} className={className} placeholder={placeholder} />;
}
export default function input({ className, placeholder }) {
  return <TwcssInput className={className} placeholder={placeholder} />;
}
