import React, { useEffect } from 'react'
import { useState } from 'react';

export default function UseEffect() {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("Minh Thu");
    useEffect(() => {
        console.log("useEffect đã được gọi")
    }, [name, count]);
    console.log("11111");
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            UseEffect
            {/**
       * là 1 hook 
       * sinh ra để là gì ?
       * giải quyết các vấn đề sideEffect(tác dụng phụ bên cạnh các tác vụ chính)
       * 
       * 
       * 
       * CÚ PHÁP
       * 3 cú pháp useEffect
       * useEffect tương tự như componentDidMount
       * 
       * 1, nhận vào 1 tham số là callback function
       * + khi component được mount vào dom thì useEffect mưới được gọi !
       * + khi mỗi lần component re-render thì useEffect mới được gọi!
       * 
       * 2, nhận vào 1 tham số là callback fuwnction(arrow function) và tham số thứ 2 là 1 mảng rỗng
       * +khi component được mount vào dom thì useEffect được gọi
       * + khi mỗi lần component re-render thì useEffect không được gọi!
       * 
       * 3, nhận vào 1 than số là 1 callback function (arrow function) và tham gia số thứ 2 là 1 mảng
       * (dependency) (sự phụ thuộc)
       * +useEffect được gọi khi component được mang vào DOM
       * +
       * 
       * 
       * 
       * cách dùng như thế nào?
       * useEffect là 1 cái hàm
       * nhận vào 2 tham số
       * 1 là callback function(arrow function)
       */}
            <p>giá tị biến count:{count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
