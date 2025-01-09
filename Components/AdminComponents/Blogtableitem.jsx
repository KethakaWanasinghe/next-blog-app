import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Blogtableitem = ({authorImg, title, author, date, deleteBlog, mongoId}) => {
    const BlogDate = new Date(date);
    
    return (
        <tr className='bg-white border-b flex flex-col sm:table-row'>
            <th scope='row' className='flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                <Image width={40} height={40} alt='author' src={authorImg ? authorImg : assets.profile_icon} />
                <p>{author ? author : "No author"}</p>
            </th>
            <td className='px-6 py-4'>
                {title ? title : "No title"}
            </td>
            <td className='px-6 py-4'>
                {BlogDate.toDateString()}
            </td>
            <td onClick={() => deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
                X
            </td>
        </tr>
    )
}

export default Blogtableitem
