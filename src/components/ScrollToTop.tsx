import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname, key } = useLocation();
    const [currentPage, setCurrentPage] = useState(pathname);


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: currentPage === pathname ? "smooth" : "instant" });
        setCurrentPage(pathname)
    }, [key]);

    return null;
}