import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname, key } = useLocation();
    const [currentPage, setCurrentPage] = useState(pathname);


    useEffect(() => {
        const container = document.getElementById("hero");
        if (container) {
            container.scrollTo({ top: 0, behavior: currentPage === pathname ? "smooth" : "instant" });
        } else {
            window.scrollTo({
                top: 0,
                behavior: currentPage === pathname ? "smooth" : "auto",
            });
        }
        setCurrentPage(pathname)
    }, [key]);

    return null;
}