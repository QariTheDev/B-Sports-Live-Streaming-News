import React from 'react'
import News from '../components/News';

function Home() {

  return (
    <> 
    <div className='flex justify-center items-center mt-10'>  {/*width 65% or 100% */}
        <iframe src="https://crichdplayer.xyz/embed2.php?id=ptvsp" width="65%" height="560" className="max-w-full" frameBorder="0" scrolling="no" allowFullScreen={true} marginHeight="0" marginWidth="0" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>   
    </div>

    <News category="all" />
    </>
  )
}

export default Home