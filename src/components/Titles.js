import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Titles = ({ content, text, desc }) => {
    return (_jsxs("div", { className: "w-full text-center inline-flex flex-col justify-center h-10 md:my-8 my-6 ", children: [_jsx("h1", { className: "font-Neue text-2xl text-baseColor", children: content }), text ? _jsx("p", { className: "md:text-2xl text-lg font-Averia font-medium my-6", children: desc }) : ""] }));
};
export default Titles;
