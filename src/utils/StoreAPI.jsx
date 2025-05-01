import { useEffect, useState } from "react";

const StoreAPI = () =>  {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
    })
}

export default StoreAPI;