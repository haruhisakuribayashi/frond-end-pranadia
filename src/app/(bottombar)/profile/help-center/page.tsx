import AppBarBack from '@/components/appbar/appbar'
import TabBarSection from '@/components/sections/profile/tab-bar-section'
import TabBar from '@/components/tab-bar/tab-bar'
import TabItem from '@/components/tab-bar/tab-item'
import React from 'react'

function Page() {
  return (
    <main>
        <AppBarBack menu='Help Center' />
        <div className='mx-5 mt-5'>
            <TabBarSection />
        </div>
        <div className="h-16"></div>
    </main>
  )
}

export default Page