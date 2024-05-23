import { useEffect, useRef } from "react";
export default function B4() {
    const focusInput = useRef<HTMLInputElement>(null);
    useEffect(() => {
        focusInput.current?.focus();
    }, []);
    return (
        <div>
            <label htmlFor="">Nhập tên:</label>
            <input ref={focusInput} type="text" />
        </div>
    );
}