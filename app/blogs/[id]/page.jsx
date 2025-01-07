"use client";

import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { use } from "react"; // Import use from React for unwrapping promises

const Page = ({ params }) => {

  const unwrappedParams = use(params); // Use React's `use()` to resolve the params Promise
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog', {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, [unwrappedParams.id]);

  return ( data ? 
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_Img}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto ">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[18px] font-semibold">Intro</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 1 - Reflection</h3>
        <p className="my-3">Learn How To Build A Full Stack Blog Website Using Next JS And MongoDB | Create A Full Stack Blog App / News website using Next JS | Next JS Project tutorial step by step 2024</p>
        <p className="my-3">Learn How To Build A Full Stack Blog Website Using Next JS And MongoDB | Create A Full Stack Blog App / News website using Next JS | Next JS Project tutorial step by step 2024</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 1 - Reflection</h3>
        <p className="my-3">Learn How To Build A Full Stack Blog Website Using Next JS And MongoDB | Create A Full Stack Blog App / News website using Next JS | Next JS Project tutorial step by step 2024</p>
        <p className="my-3">Learn How To Build A Full Stack Blog Website Using Next JS And MongoDB | Create A Full Stack Blog App / News website using Next JS | Next JS Project tutorial step by step 2024</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 1 - Reflection</h3>
        <p className="my-3">Learn How To Build A Full Stack Blog Website Using Next JS And MongoDB | Create A Full Stack Blog App / News website using Next JS | Next JS Project tutorial step by step 2024</p>
        <p className="my-3">Learn How To Build A Full Stack Blog Website Using Next JS And MongoDB | Create A Full Stack Blog App / News website using Next JS | Next JS Project tutorial step by step 2024</p>
        
      </div>
      <Footer/>
    </>:<></> 
  );
};

export default Page;
