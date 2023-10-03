import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchProducts} from "./store/modules/listingsSlice.js";

function App() {
    const dispatch = useDispatch(); // Help to dispatch actions, Example: dispatch(fetchProducts())
    const {products} = useSelector(state => state.listings); // GETS THE PRODUCTS FROM THE STORE

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    console.log(products);
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold underline bg-amber-300">
                    {products.map((product, index) => (
                        <div key={index}>
                            {product}
                        </div>
                    ))}
                </h1>
            </div>
        </>
    )
}

export default App
