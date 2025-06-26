import { useEffect, useState } from 'react';
import './styles.css';

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 10
                }`
            );

            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
            }

            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);


    useEffect(() => {
        if (products && products.length === 100) setDisabledButton(true);
    }, [products]);

    if (loading) {
        return <div>Loading data ! Please wait.</div>;
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length
                    ? products.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <h2><b>Title: </b>{item.title}</h2>
                            <p><b>Description: </b>{item.description}</p>
                            <p><b>Price: </b>{item.price}</p>
                            <p><b>Rating: </b>{item.rating}</p>
                            <p><b>Stock: </b>{item.stock}</p>
                        </div>
                    )) : null}
            </div>
            <div className="button-container">
                <button disabled={disabledButton} onClick={() => setCount(count + 1)}>
                    Load More Products
                </button>
                {disabledButton ? <p>You have reached to 100 products</p> : null}
            </div>
        </div>
    );
}