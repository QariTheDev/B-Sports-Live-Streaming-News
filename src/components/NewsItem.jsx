import { ClipLoader } from 'react-spinners'
import React from 'react'

function NewsItem(props) {

  return (
    <>
      <div className={`block rounded-lg w-[350px] h-auto text-center bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}>
          <div className="relative overflow-hidden rounded-t-lg">
              <div className="tag bg-red-600 text-sm rounded-lg p-1 absolute z-10 top-0 right-0">{props.author}</div>
              <img className="object-cover w-full h-48 transition-transform duration-500 hover:scale-125" src={props.img} alt="news_pic" />
          </div>
          
          <div className='p-6'>
            <h3 className='mb-2 font-medium text-xl leading-tight text-neutral-800 dark:text-neutral-50'><a href={props.url} target='_blank'>{props.title}</a></h3>
            <p className='mb-4 text-base hover:underline hover:cursor-pointer text-neutral-600 dark:text-neutral-200'>
              <a href={props.url} target='_blank'>{props.content}</a>
            </p>
            <a href={props.url} target='_blank'>
              <button className='bg-sky-500 text-neutral-800 font-medium p-2 rounded-lg transition duration-300 ease-in-out hover:bg-neutral-800 hover:text-sky-500'>Read More</button>
            </a>
          </div>
      </div>
    </>
  )
}

export default NewsItem