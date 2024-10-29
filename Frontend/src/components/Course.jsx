import React from 'react';
import list from '/public/list.json'
import Cards from './Cards';
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center">
          <h1 className="font-bold text-2xl">
            We are delighted to have 
            <span className="text-pink-600"> you here</span>
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum quam voluptatibus 
            nesciunt eligendi eaque veniam porro repellendus odio officiis vel architecto illo asperiores. 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus recusandae eligendi 
            sit quae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci dolorum culpa neque 
            tempore facere quibusdam doloribus delectus. Adipisci quod, ut tenetur error harum unde alias 
            distinctio explicabo beatae quae ex?
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 px-6 py-3 rounded-md text-white hover:bg-pink-700">
            Back
          </button>
          </Link>

          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Cards item={item} key={item.id}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
