import React from 'react'
import News from '../components/News';

function Tennis() {

    return (
        <> 
            <div className='flex justify-center items-center mt-10'>  {/*width 65% or 100% */}
                <iframe 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0" 
                    height="560" 
                    src="https://crichdstreaming.cc/embed2.php?id=supertennis&q=SuperSport Tennis" 
                    name="iframe_a" 
                    scrolling="no" 
                    width="65%">
                        Your Browser Do not Support Iframe
                </iframe>
            </div>
        
            <News category="all" />
        </>
      )
}

export default Tennis;