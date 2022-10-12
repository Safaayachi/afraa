import React from 'react'
import Layout from '../components/Layout'
import SearchRoomCard from '../components/SearchRoomCard'

const search = () => {
  return (
    <div className='relative w-full h-full'>
        <Layout>
            <div className='relative w-full h-full pt-20'>
                <div className='relative w-full h-full bg-tint py-10 px-8'>
                    <SearchRoomCard/>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default search