import React, {useState, useEffect, useRef} from 'react'
import { ProductCard } from '../../components'
import './new_products.css'

const NewProducts = ({title, getProducts}) => {
    let [products, setProducts] = useState([])

    useEffect(() => {
        call();
        //eslint-disable-next-line
    }, [])

    const call = async()=>{
        const response = await getProducts()
        if(response.success){
            setProducts([...response.products])
        }
    }

    const changeNumber = (price) => {
        var counter = 0;
        var priceChar = Math.trunc(price).toString();
        var finalPrice = "";
    
    
        for(var i=priceChar.length-1;i>=0;i--){
            counter++;
            if(counter%3===0 && i!==0) finalPrice += priceChar[i]+".";
            else finalPrice += priceChar[i]
        }
    
        const showPrice = finalPrice.split("").reverse().join("");
        return showPrice;
    
    }

    const listRef = useRef();

    //the size of the list
    const [width, setWidth] = useState();
    const [height, setHeigth] = useState();
    const [moves, setMoves] = useState(0);

    const nextMove = () => {
        setMoves(moves + 1);
    }

    const previousMove = () => {
        if (moves > 0) {
            setMoves(moves - 1);
        }
    }


    const getListSize = () => {
        const newWidth = listRef.current.clientWidth;
        setWidth(newWidth);

        const newHeight = listRef.current.clientHeight;
        setHeigth(newHeight);
    };

    useEffect(() => {
        getListSize();
    }, [moves]);

    useEffect(() => {
        window.addEventListener("resize", getListSize);
      }, []);

  return (
    <div className="dacris__newProducts">
        <div className='dacris__newProducts-header'>
            <div className='dacris__newProducts-header-container'>
                <h1 className='dacris__newProducts-header-container-title'>{title}</h1>
            </div>
        </div>
        <div className="dacris__newProducts-slider">
            <div className='dacris__newProducts-slider-button' onClick={previousMove}><i className='bx bxs-left-arrow' ></i></div>
            <div className='dacris__newProducts-slider-container' ref={listRef}>
                <div className='dacris__newProducts-slider-container-slide' style={{transform: `translateX(${(-width*moves)+(((moves*width)/100)*2)}px)`}}>
                    {products.map((product, index)=> {
                        if(product.images === undefined) return <div></div>
                        return <ProductCard  key={index} path={product.images[0].url} productName={product.name} productPrice={'$'+changeNumber(product.price)} />
                    })}
                </div>
            </div>
            <div className='dacris__newProducts-slider-button' onClick={nextMove}><i className='bx bxs-right-arrow'></i></div>
        </div>
        <div className='dacris__newProducts-all'>
            <a class='dacris__newProducts-all-button' href="">ver todos los {title}</a>
        </div>
    </div>
  )
}

export default NewProducts