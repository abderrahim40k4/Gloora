import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import NextArr from "../../assets/icons/next.svg";
import PervArr from "../../assets/icons/prev.svg";
import { Button } from "../ui/button";
const Pagintion = ({ totalPostes, postesPerPage, currentPage, setCurrentPage }) => {
    let pages = [];
    for (let i = 0; i <= Math.ceil(totalPostes / postesPerPage); i++) {
        pages.push(i);
    }
    return (_jsxs("div", { className: 'w-full inline-flex justify-end items-center gap-8', children: [_jsxs("span", { className: "text-[#CACACA] font-Neue font-medium text-lg", children: [" Page 0", currentPage] }), _jsx(Button, { className: "w-12 h-12 border border-baseColor p-1 rounded-full", size: "icon", onClick: () => { currentPage > 0 ? setCurrentPage(currentPage--) : setCurrentPage(1); }, children: _jsx("img", { src: PervArr, alt: "" }) }), _jsx(Button, { className: " w-12 h-12  border border-baseColor p-1 rounded-full", size: "icon", onClick: () => { setCurrentPage(currentPage++); }, children: _jsx("img", { src: NextArr, alt: "" }) })] }));
};
export default Pagintion;
