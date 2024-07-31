import React from 'react'


function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto  flex justify-between  py-6  '>
  <div className='left w-1/2 text-gray-500 text-sm  flex gap-6 '>
{
[" Privacy Plicy","Cookie Policy","Impressum","Terms","Webflow Agency"

].map((elem,index)=><a href='#'key={index}  >{elem} </a>)
}

  </div>
<div className=" right  w-1/2  flex  justify-end  right">
  <div  >
    <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
  </div>
</div>
    </div>
  )
}

export default Footer