import React from 'react'
import Bot from './ChatBot'


export default function ChatBotLayout() {
  return (
    <><div className='bg-MainBGColorYellow h-screen lg:-mb-18 flex justify-center '>
        <div className='p-2 pt-4'>
    <Bot/>
    </div>
    </div>
    </>
  )
}
