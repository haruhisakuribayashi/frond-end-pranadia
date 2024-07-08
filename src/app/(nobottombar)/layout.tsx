import Link from 'next/link';
import React from 'react'

function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='h-full'>
        {children}
    </div>
  )
}

export default Layout