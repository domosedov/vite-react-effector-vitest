import * as React from "react";

export const Button = React.forwardRef<
  HTMLButtonElement,
  JSX.IntrinsicElements["button"]
>((props, forwardedRef) => (
  <button
    className="bg-black text-white px-4 py-1"
    ref={forwardedRef}
    {...props}
  />
));

Button.displayName = "Button";
