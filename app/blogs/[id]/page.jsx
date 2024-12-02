'use client';

import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { use } from 'react'; // Import use from React for unwrapping promises

const Page = ({ params }) => {
  const unwrappedParams = use(params); // Use React's `use()` to resolve the params Promise
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(unwrappedParams.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [unwrappedParams.id]);

  return (
    data ? (
      <>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image src={assets.logo} width={180} alt="" className="w-[130px] sm:w-auto" />
            </Link>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
              Get Started <Image src={assets.arrow} alt="arrow" />
            </button>
          </div>
          <div className="text-center my-24">
            <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
            <Image
              className="mx-auto mt-6 border border-white rounded-full"
              src={data.author_img}
              width={60}
              height={60}
              alt=""
            />
            <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto ">{data.author}</p>
          </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
          <Image className="border-4 border-white" src={data.image} width={1280} height={720} alt="" />
          <h1 className="my-8 text-[26px] font-semibold ">Introduction:</h1>
<p>
  Blogging has become a powerful medium for sharing knowledge, ideas, and stories with the world. 
  Whether you are a professional looking to showcase your expertise, a hobbyist sharing your passion, 
  or an organization aiming to build an audience, a blog is the ideal platform to connect with your readers. 
  In this post, we explore the steps to creating impactful blog posts that engage, inform, and inspire.
</p>

<h3 className="my-5 text-[18px] font-semibold">Step 1: Define Your Audience</h3>
<p className="my-3">
  Understanding your target audience is the cornerstone of effective blogging. Research their preferences, 
  challenges, and interests to tailor your content to their needs. For example, a tech blog should focus on 
  the latest trends and offer practical tips that appeal to developers or enthusiasts.
</p>
<p className="my-3">
  By defining a niche, you ensure your blog resonates with the right readers, increasing the likelihood of 
  engagement and repeat visits.
</p>

<h3 className="my-5 text-[18px] font-semibold">Step 2: Craft Compelling Headlines</h3>
<p className="my-3">
  Your headline is the first impression of your post. A captivating headline not only grabs attention but also 
  sets the tone for the content. Use action words, numbers, and emotional triggers to make it stand out.
</p>
<p className="my-3">
  For instance, instead of &quot;Tips for Better Writing,&quot; try&quot;10 Proven Strategies to Instantly Improve Your Writing.&quot; 
  Headlines like these promise value and intrigue readers to dive into the post.
</p>

<h3 className="my-5 text-[18px] font-semibold">Step 3: Create Valuable Content</h3>
<p className="my-3">
  Content is king, but valuable content reigns supreme. Focus on solving problems, answering questions, 
  or providing unique insights. Always prioritize quality over quantity—write posts that your audience finds 
  genuinely useful and worth sharing.
</p>
<p className="my-3">
  Use visuals, examples, and storytelling to make your post engaging. Break up large chunks of text with headings, 
  bullet points, and images to improve readability.
</p>

<h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
<p className="my-3">
  Building a successful blog takes time, effort, and consistency. By understanding your audience, crafting 
  compelling headlines, and delivering valuable content, you lay a strong foundation for your blog&apos;s growth.
</p>
<p className="my-3">
  Remember, blogging is as much about building relationships as it is about creating content. Engage with your 
  readers through comments, feedback, and social media to foster a loyal community around your blog.
</p>

        </div>
        <Footer />
      </>
    ) : (
      <></>
    )
  );
};

export default Page;
