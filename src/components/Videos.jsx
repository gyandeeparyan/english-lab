import React from "react";
import ReactPlayer from "react-player";

const Videos = () => {
  return (
    <div className='container md:flex gap-10'>
      {/* Videos List Container */}
      <div className='border-2 border-solid rounded-2xl flex flex-col overflow-y-scroll  h-[450px] border-black p-4 gap-4 w-[300px]'>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className='border flex flex-col border-gray-300 rounded-md p-2 h-[100px] cursor-pointer hover:bg-gray-100'>
            <p>Video {index + 1}</p>
            <p>Video {index + 1}</p>
            <p>Video {index + 1}</p>
          </div>
        ))}
      </div>

      {/* Player Container */}
      <div className=' overflow-hidden rounded-2xl shadow-lg w-[800px] h-[450px]'>
        <ReactPlayer
        
          controls={true}
          url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
};

export default Videos;
