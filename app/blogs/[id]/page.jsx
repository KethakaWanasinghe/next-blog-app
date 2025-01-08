"use client";

import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, use } from "react";

const Page = ({ params }) => {
  const resolvedParams = use(params); // Resolve the params promise
  const { id } = resolvedParams; // Destructure the id from resolvedParams
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Track errors

  const fetchBlogData = async () => {
    try {
      const response = await axios.get('/api/blog', { params: { id } });
      console.log("API Response:", response.data);
      setData(response.data);
    } catch (err) {
      console.error("Failed to fetch blog data:", err);
      setError("Failed to load blog content.");
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlogData();
    }
  }, [id]);

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        {error}
        <Footer />
      </div>
    );
  }

  return (
    data ? (
      <>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src={assets.logo}
                width={180}
                alt="Blogger Logo"
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
            {data.authorImg && (
              <Image
                className="mx-auto mt-6 border border-white rounded-full"
                src={data.authorImg}
                width={60}
                height={60}
                alt={data.author || "Author"}
              />
            )}
            <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
              {data.author}
            </p>
          </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
          {data.image && (
            <Image
              className="border-4 border-white"
              src={data.image}
              width={1280}
              height={720}
              alt="Blog image"
            />
          )}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
          <div className="mt-24">
            <p className="text-black font-semibold my-4">
              Share this article on social media
            </p>
            <div className="flex">
              <Image src={assets.facebook_icon} width={50} alt="facebook" />
              <Image src={assets.twitter_icon} width={50} alt="twitter" />
              <Image src={assets.googleplus_icon} width={50} alt="google" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    ) : (
      <div className="text-center mt-10">
        <p>Loading...</p>
        <Footer />
      </div>
    )
  );
};

export default Page;
