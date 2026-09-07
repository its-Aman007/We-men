import React from 'react'
import assets from '../assets/assets'
import Title from '../components/Title.jsx'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    
      <div className='text-center py-8 text-3xl'>
        <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500 text-sm'>Market Street Kitchen <br /> Gorakhpur, Uttar Pradesh</p>
            <p className='text-gray-500 text-sm'>Phone: (123) 456-7890 <br /> Email: hello@ourkitchen.com </p>
            <p className='font-semibold text-xl text-gray-600'>Catering and celebrations</p>
            <p className='text-gray-500 text-sm'>Planning a party or office lunch? Our team can help build a delicious spread.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Ask about catering</button>

          </div>
        </div>
        <NewsletterBox />
    </div>
  )
}

export default Contact
