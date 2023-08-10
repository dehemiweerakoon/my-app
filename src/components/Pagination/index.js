import React from 'react'

const Paginate = ({totalpage,postsPerpage,setCurrentPage}) => {
    const pages=[];
    let i=1;
    for(i=1; i<=Math.ceil(totalpage/postsPerpage);i++){
     pages.push(i);
    }
  return (
   <div className='flex container p-2  justify-center'>
    {
      pages.map((page,index)=>{
        return <button key={index} onClick={()=>setCurrentPage(page)} className="m-3   border border-pink-700 p-2 hover:bg-pink-200 bg-pink-500">{page}</button>
      }

      )
    }
   </div>
  )
}

export default Paginate