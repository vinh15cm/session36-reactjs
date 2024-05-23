import { useState } from "react";
export default function B1() {
    const [title, setTitle] = useState<string>("");
    document.title = title;
    return (
        <>
            B1 <br />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nhập tiêu đề"
            />{" "}
            <br />
        </>
    );
}