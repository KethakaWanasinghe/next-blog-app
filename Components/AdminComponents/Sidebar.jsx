import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 h-full">
      <div className="px-2 sm:pl-14 py-3 border-b border-black">
        <Image src={assets.logo} width={120} alt="Logo" />
      </div>
      <div className="w-full sm:w-80 h-full relative py-12 border-t border-black">
        <div className="w-full sm:w-[80%] absolute right-0 sm:right-auto">
          <Link href='/admin/addProduct' className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.add_icon} alt="Add Icon" width={28} />
            <p>Add Blogs</p>
          </Link>
          <Link href='/admin/blogList' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.blog_icon} alt="Blog Icon" width={28} />
            <p>Blog List</p>
          </Link>
          <Link href='/admin/subscriptions' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.email_icon} alt="Email Icon" width={28} />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
