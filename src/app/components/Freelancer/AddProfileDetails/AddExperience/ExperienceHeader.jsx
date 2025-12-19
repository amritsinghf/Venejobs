import React from 'react'

const ExperienceHeader = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl text-heading font-bold leading-tight">
            Let’s share your professional experience
        </h2>

        <p className="text-gray-500 text-base 2xl:text-lg font-medium leading-7 lg:leading-8 tracking-wide">
            Let clients know where you've been and what you've done. Highlight your past roles, achievements, and the value you brought to previous projects.
        </p>
    </div>
  )
}


export default ExperienceHeader;
