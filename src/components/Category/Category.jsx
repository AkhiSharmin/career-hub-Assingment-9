import React from 'react';
import './Category.css'

const Category = ({categoryData}) => {

    // console.log(categoryData)

    const { img, title, description} = categoryData;

    return (
            <div className='bg-gray-300 p-10 bg rounded'>
                <img className='h-16 w-16 inline-block my-4' src={img} alt="" />
                <h2 className='text-black font-semibold'>{title}</h2>
                <p>{description}</p>
            </div>
    );
};

export default Category;