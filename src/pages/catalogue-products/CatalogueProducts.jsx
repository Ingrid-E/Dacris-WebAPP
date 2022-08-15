import React from 'react'
import { useState } from 'react'
import { Footer, HeaderTitle, Navbar, ProductItem } from '../../components'
import './catalogue_products.css'

const CatalogueProducts = () => {

  const [filterPriceState, setFilterPriceState] = useState(false);
  const [filterCategorieState, setFilterCategorieState] = useState(false);

  return (
    <div className='dacris__catalogue-products'>
        <Navbar />
        <HeaderTitle title='Mujer'/>
        <div className='dacris__catalogue-products-content'>
            <div className='dacris__catalogue-products-content-items'>
              <ProductItem path='https://dacrisphotobucket.s3.amazonaws.com/1638977952631-01-1660091328207.jpeg' name='Dakar con tapa' price='50.000' />
              <ProductItem path='https://dacrisphotobucket.s3.amazonaws.com/Bag-1660093746096.jpeg' name='Dakar con tapa' price='50.000' />
              <ProductItem path='https://dacrisphotobucket.s3.amazonaws.com/MiniBag-1660233757116.jpeg' name='Dakar con tapa' price='50.000' />
              <ProductItem name='Dakar con tapa' price='50.000' />
              <ProductItem name='Dakar con tapa' price='50.000' />
              <ProductItem name='Dakar con tapa' price='50.000' />
              <ProductItem name='Dakar con tapa' price='50.000' />
              <ProductItem name='Dakar con tapa' price='50.000' />
              <ProductItem name='Dakar con tapa' price='50.000' />
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