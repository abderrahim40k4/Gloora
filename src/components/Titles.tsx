import React from 'react'

const Titles = ({content}:{content:string}) => {
  return (
    <div className="w-full text-center inline-flex justify-center h-10 my-4 ">
                    <h1 className="font-Neue text-2xl text-baseColor">
                        {content}
                    </h1>
                </div>
  )
}

export default Titles