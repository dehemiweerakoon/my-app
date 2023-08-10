import React from 'react'

const Paginate = ({totalpage,postsPerpage}) => {
    const page=[];
    let i=1;
    for(i=1; i<=Mathceli(totalpage/postsPerpage);i++){
     page.push(i);
    }
  return (
    <div>Paginate</div>
  )
}

export default Paginate