import { useEffect, useState } from "react";
import './B3.css'
export default function B3() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [item, setItem] = useState<string[]>([
        "Trang chủ",
        "Sản phẩm",
        "Giới thiệu",
        "Liên hệ",
    ]);
    console.log(setItem);
    useEffect(() => { }, [selectedIndex]);
    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };
    return (
        <div>
            {item.map((item, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{
                        backgroundColor: selectedIndex === index ? "gray" : "white",
                        color: selectedIndex === index ? "white" : "black",
                    }}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}