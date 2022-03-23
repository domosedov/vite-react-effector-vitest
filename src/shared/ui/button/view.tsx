import * as React from "react";
import clsx from "clsx";
import { button } from "./button.css";

export const Button = React.forwardRef<
  HTMLButtonElement,
  JSX.IntrinsicElements["button"]
>(({ className, ...restProps }, forwardedRef) => (
  <button
    className={clsx(button, className)}
    ref={forwardedRef}
    {...restProps}
  />
));

Button.displayName = "Button";
