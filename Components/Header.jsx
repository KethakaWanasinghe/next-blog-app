import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate email input
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await axios.post('/api/email', formData);

      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail('');
      } else {
        toast.error('Error: Unable to subscribe.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Subscription Error:', error);
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} width={180} alt="Logo" className="w-[130px] sm:w-auto" />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started <Image src={assets.arrow} alt="Arrow" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-black font-serif bold">Blog Space</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          <span className="text-lg font-semibold">Exploring Technology and Life<br /></span><br />
          Welcome to Blogger, your gateway to the ever-evolving world of tech and its impact on everyday life! From cutting-edge innovations to practical tips for living smarter, delve into content that bridges the gap between technology and humanity. Whether you&apos;re a tech enthusiast, a curious learner, or someone seeking inspiration, we&apos;ve got you covered.
          <br /><br />
          Stay awhile, dive into our latest posts, and be part of the journey as we navigate the intersection of technology and life together! 🌐
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
