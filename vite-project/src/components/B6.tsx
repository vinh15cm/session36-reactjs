import { useState, useEffect } from "react";
export default function B6() {
    const [scrollTop, setScrollTop] = useState(0);
    const handleClick = () => { };
    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(document.documentElement.scrollTop);
        };
        window.addEventListener("scroll", handleScroll);
    }, []);
    document.title = `vị trí cuộn: ${scrollTop}`;
    return <h4 onClick={handleClick}>Vị trí cuộn: {scrollTop}</h4>;
}