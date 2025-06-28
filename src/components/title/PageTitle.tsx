'use client';

import React from 'react'

interface ITitle{
    title:string;
    description:string;
}
const PageTitle = ({title, description}:ITitle) => {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-xl text-gray-600">{description}</p>
    </div>
  )
}

export default PageTitle;