import React from 'react'
import News from '../components/News';

function Football() {

    return (
        <> 
            <div className='flex justify-center items-center mt-10'>  {/*width 65% or 100% */}
                <iframe 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0" 
                    height="560" 
                    src="https://crichdstreaming.cc/embed2.php?id=skyfb&q=Sky Sports Football" 
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

export default Football;