import React from 'react';

const SubsTableItem = ({ email, mongoId, deleteEmail, date }) => {
  const emailDate = new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
      <th scope='row' className='px-4 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap'>
        {email ? email : "No Email"}
      </th>
      <td className='px-4 py-2 sm:px-6 sm:py-4 hidden sm:table-cell'>
        {emailDate.toDateString()}
      </td>
      <td className='px-4 py-2 sm:px-6 sm:py-4 cursor-pointer text-red-500' onClick={() => deleteEmail(mongoId)}>
        X
      </td>
    </tr>
  );
};

export default SubsTableItem;