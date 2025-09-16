'use client';
import { useState } from 'react';
import { BannerDataTypes, ProductsTypes } from '../app/page';
import FooterBanner from '../comps/FooterBanner';
import MainBanner from './MainBanner';
import Products from '../app/Products';

interface HomeProps {
  products: ProductsTypes[];
  bannerData: BannerDataTypes[];
}

const Home = ({ products, bannerData }: HomeProps) => {
  const [sortOrder, setSortOrder] = useState<string>('');

  // Sort products based on selected order
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'low-to-high') {
      return a.price - b.price;
    } else if (sortOrder === 'high-to-low') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <main>
      {/* === MAIN BANNER  */}
      <MainBanner banner={bannerData[0]} />

      <section className='  mb-4 flex items-center flex-col'>
        <h1
          className=' headTitle px-8 py-4 sm:py-2 sm:text-4xl text-2xl text-secondary
         font-sans font-extrabold sm:rounded-t-3xl'
        >
          Best Selling Headphones
        </h1>
        {/* <p className=" text-base text-secondary">Best in the Market</p> */}
      </section>

      {/* === SORT DROPDOWN */}
      <section className='flex justify-center mb-6'>
        <select
          className='px-4 py-2 border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value=''>Sort by Price</option>
          <option value='low-to-high'>Low to High</option>
          <option value='high-to-low'>High to Low</option>
        </select>
      </section>

      {/* === SHOW PRODUCTS  */}
      <section
        className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3
       lg:mx-20 overflow-hidden
      '
      >
        {/* === MAP PRODUCTS  */}
        {sortedProducts?.map((products: ProductsTypes) => {
          return <Products key={products._id} products={products} />;
        })}
      </section>

      {/* ==== FOOTER BANNER  */}
      <FooterBanner bannerData={bannerData && bannerData[1]} />
    </main>
  );
};

export default Home;
