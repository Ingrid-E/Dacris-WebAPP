import React from 'react'
import { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Footer, HeaderTitle, Navbar, ProductItem } from '../../components'
import './catalogue_products.css'
import { getProducts } from '../../api'
import RingLoader from '../../components/animations/ringLoader';
const CatalogueProducts = () => {

  const [filterPriceState, setFilterPriceState] = useState(false);
  const [filterCategorieState, setFilterCategorieState] = useState(false);
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    call();
  }, [])

  useEffect(()=>{

  }, [loading])

  const call = async () => {
    setLoading(true)
    const response = await getProducts()
    if (response.success) {
      setLoading(false)
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

  const goToProduct = (product)=>{
    navigate("/des-product", {state: product})
  }



  return (
    <div className='dacris__catalogue-products'>
      <Navbar />
      <HeaderTitle title='Mujer' />
      <div className='dacris__catalogue-products-content'>
        <div className='dacris__catalogue-products-content-items'>
        {loading? (<div className='loading_overlay'>
                <RingLoader />
                </div>
            
           ): <></>}
          {products.map((product, index) => {
            return (
              <div onClick={()=> {goToProduct(product)}}>
              <ProductItem path={product.images !== undefined? product.images[0].url: ''} name={product.name} price={changeNumber(product.price)} />
              </div>
            )
          })}
        </div>
        <div className='dacris__catalogue-products-content-filters'>
          <h1 className='dacris__catalogue-products-content-filters-title'>Filtros</h1>
          <fieldset className='price-filter'>
            <h1 className='filter-title'>Por precio<i className='bx bxs-down-arrow' onClick={() => filterPriceState ? setFilterPriceState(false) : setFilterPriceState(true)}></i></h1>
            <div className={`filter-options ${filterPriceState ? "open" : ""}`}>
              <label htmlFor="sort-by-higher">De mayor a menor</label>
              <input type="radio" id='sort-by-higher' name='sort_by_price' value='byPrice' /><br />
              <label htmlFor="sort-by-lower">De menor a mayor</label>
              <input type="radio" id='sort-by-lower' name='sort_by_price' value='byPrice' />
            </div>
          </fieldset>
          <fieldset className='price-filter'>
            <h1 className='filter-title'>Por categoria<i className='bx bxs-down-arrow' onClick={() => filterCategorieState ? setFilterCategorieState(false) : setFilterCategorieState(true)}></i></h1>
            <div className={`filter-options ${filterCategorieState ? "open" : ""}`}>
              <label htmlFor="manos_libres">Manos libres</label>
              <input type="checkbox" id='manos_libres' name='sort_by_Categorie' value='byCategorie' /><br />
              <label htmlFor="morrales">Morrales</label>
              <input type="checkbox" id='morrales' name='sort_by_Categorie' value='byCategorie' /><br />
              <label htmlFor="carteras">Carteras</label>
              <input type="checkbox" id='carteras' name='sort_by_Categorie' value='byCategorie' /><br />
              <label htmlFor="sobres_de_fiesta">Sobres de fiesta</label>
              <input type="checkbox" id='sobres_de_fiesta' name='sort_by_Categorie' value='byCategorie' /><br />
              <label htmlFor="cosmetiqueras">cosmetiqueras</label>
              <input type="checkbox" id='cosmetiqueras' name='sort_by_Categorie' value='byCategorie' /><br />
              <label htmlFor="correas">Correas</label>
              <input type="checkbox" id='correas' name='sort_by_Categorie' value='byCategorie' /><br />
            </div>
          </fieldset>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CatalogueProducts