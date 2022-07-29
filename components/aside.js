import React from 'react';
import Link from 'next/link';

function Aside({ tags }) {
  return (
    <aside className='col-span-1'>
      <p className='mb-2 pl-2 border-b border-gray-500'>Archive</p>
      <ul className='mb-2'>
      <li>aaa</li>
        {/* {tags.length > 0 && tags.map((tag) => (
          <li key={tag.id} className='mb-2'>
            <Link href={`/tags/${tag.id}`}>
              <a>{tag.text}</a>
            </Link>
            <var>{tag.count}</var>
          </li>
        ))} */}
        <li>bbb</li>
        {tags && tags.map((tag) => (
          <li key={tag} className='mb-2'>
            <Link href={`/tags/${tag.toLowerCase()}`}>
              <a>{tag}</a>
            </Link>
          </li>
        ))}
        <li>ccc</li>
      </ul>
    </aside>
  );
}

export default Aside;