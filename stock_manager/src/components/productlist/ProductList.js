import ProductCard from "../cards/ProductCard";

export default function ProductList(prop){

    const productlist = prop.data.map(product => 
        <ProductCard data={product}></ProductCard>
    )

    return <div className='product_list'>
        {productlist}
    </div>
}