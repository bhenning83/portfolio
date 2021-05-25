import React from 'react'

function About() {
  return (
    <div className='section row about mt-5'>
       <div className='section-title col-12 text-center d-flex justify-content-center align-items-center'>
        <div className='line-about'></div>
        <h1 className='mx-1 mx-sm-2 mx-lg-3'>A Little About Me</h1>
        <div className='line-about'></div>
      </div>
      <div className='col-12 col-lg-5 my-4 my-lg-0'>
        <div className='about-pic mx-auto'></div>
      </div>
      <div className='col-12 col-lg-7'>
        <p>Proin et ex et enim maximus sagittis. Quisque blandit tellus quam, nec cursus erat congue quis. Praesent porttitor purus nunc, ac dictum lorem mollis a. Mauris porta, ex non hendrerit semper, neque tellus mollis dui, eu mollis libero purus id nisl. Nam volutpat vulputate erat vitae laoreet. Etiam cursus lectus ac lacus ornare aliquet. Etiam condimentum suscipit est quis aliquam.</p>
        <p className='mt-4'>Nam ac accumsan lectus. Nullam aliquet lobortis facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse dictum massa massa, nec dictum nibh commodo et. Aliquam est augue, faucibus ut tincidunt sed, molestie ac dolor. Aliquam sodales massa vel gravida ultrices. Aenean at nibh ac augue ornare posuere eget vel felis. Duis tincidunt erat nulla, at dignissim nunc placerat ut. Proin rhoncus aliquam sem non consequat. Aliquam sit amet nisl tincidunt, pellentesque arcu sit amet, vulputate sapien. Vivamus laoreet pellentesque est, eget egestas tellus porttitor sit amet. Quisque molestie pulvinar tincidunt. Morbi consectetur lobortis aliquam.</p>
      </div>
    </div>
  )
}

export default About;