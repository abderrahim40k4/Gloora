import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import icon from "../../assets/icons/fillter.svg";
import { cn } from "@/lib/utils";
const Slider = React.forwardRef(({ className, ...props }, ref) => (_jsxs(SliderPrimitive.Root, { ref: ref, className: cn("relative flex w-full touch-none select-none items-center", className), ...props, children: [_jsxs(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-baseColor dark:bg-baseColor", children: [_jsx(SliderPrimitive.Range, { className: "absolute h-full bg-baseColor dark:bg-baseColor" }), "test"] }), _jsxs(SliderPrimitive.Thumb, { className: "inline-flex justify-center items-center gap-2 h-7 w-16 rounded-full border-2 border-softGray bg-baseColor transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-50 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300", children: [_jsxs("span", { className: "text-xs font-Neue text-white ", children: [props.value, " $"] }), " ", _jsx("span", { className: "h-4 w-4 inline-flex justify-center items-center bg-white rounded-full", children: _jsx("img", { src: icon }) })] })] })));
Slider.displayName = SliderPrimitive.Root.displayName;
export { Slider };
