import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// componente responsável por scrollar a página para cima toda vez que uma navegação for feita. 

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}