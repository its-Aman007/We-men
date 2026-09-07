import assets from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title.jsx'

const About = () => {
  return (
    <div>
      <div className='text-center pt-8 text-3xl border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to our little online kitchen, your destination for joyful sweets, comforting food, and refreshing drinks. We bring together nostalgic favourites and modern treats, prepared in small batches and packed with care.

      Our goal is to make ordering delicious food feel easy, warm, and personal. Whether you are planning a celebration, sharing dinner, or treating yourself after a long day, there is something ready for your table.</p>
        
        
        <b className='text-gray-800'>OUR MISSION</b>
        <p>We make everyday moments more delicious with honest ingredients, generous portions, thoughtful packaging, and service that feels as good as the food.</p>
        <p className='text-4xl text-black-400 py-2 mt-4'>Thank you for choosing our kitchen!</p>
        <p>Enjoy the convenience of online ordering with fresh delivery to your door.</p>
        <hr />
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Fresh ingredients:</b>
          <p className='text-gray-600'>We choose quality ingredients and prepare every order with care, so each bite feels homemade and satisfying.</p>
        </div>
        <div className='border-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Made for sharing:</b>
          <p className='text-gray-600'>Our menu includes treats for one, family favourites, and giftable boxes for the people who make life sweeter.</p>
        </div>
        <div className='border-gray-100 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Warm service:</b>
          <p className='text-gray-600' >Our team is here to help with orders, special requests, and delivery questions from checkout to the last bite.</p>
        </div>

      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
