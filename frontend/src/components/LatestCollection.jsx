import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import ProductItem from './ProductItem.jsx'
import Title from './Title.jsx'





const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts,setlatestProducts]=useState([]);

    useEffect(()=>{
        setlatestProducts((products || []).slice(0,5));
    },[products])

    // console.log(products);

return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"Fresh"} text2={"Favourites"} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Small-batch sweets, comforting meals, and refreshing drinks made for sharing.
            </p>


        </div>

        {/* product render */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem
                    key={index}
                    id={item.id || item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                        />
                ))
            }
            
        </div>

        {/* <button className='flex flex-col items-center text-gray-500'>View More</button> */}
        {/* <div className='text-center py-2 text-xl hover:blue-500'>
            <button>View More</button>

            
            

        </div> */}

    
    </div>
);
};

export default LatestCollection
