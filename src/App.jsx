import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

function App() {
    const [text, setText] = useState('Hello World!');
    const dispatch = useDispatch(); // Help to dispatch actions, Example: dispatch(fetchProducts())
    const {products} = useSelector(state => state.products); // GETS THE PRODUCTS FROM THE STORE
    console.log("products: ", products);
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold underline bg-amber-300">
                    {text}
                </h1>
            </div>
        </>
    )
}

export default App
