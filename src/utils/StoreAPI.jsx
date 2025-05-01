import { useEffect, useState } from "react";

const StoreAPI = () =>  {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setData(data));
    }, [])
    return data;
}

export default StoreAPI;