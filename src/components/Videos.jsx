import React, { useState } from "react";
import ReactPlayer from "react-player";
import { videoData } from "../data/videos";
import { useParams, Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Videos = () => {
  const { number } = useParams();
 
  const [selectedVideo, setSelectedVideo] = useState(
    videoData["standard" + number][0]
  );

  return (
    <div className='container mx-auto p-4'>
      <div className='mb-6'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/learn'>Standard {number}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Videos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Videos List Container */}
        <div className='border-2 border-solid rounded-2xl flex flex-col overflow-y-scroll order-2 lg:order-1 h-[250px] lg:h-[650px] p-4 gap-4 w-full lg:w-[350px]'>
          {videoData["standard" + number].map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className={`flex flex-row lg:flex-col border border-gray-200 rounded-lg p-3 cursor-pointer transition-all hover:shadow-md ${
                selectedVideo.id === video.id
                  ? "bg-blue-50 border-blue-300"
                  : "hover:bg-gray-50"
              }`}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className='w-24 lg:w-full h-20 lg:h-32 object-cover rounded-lg lg:mb-2'
              />
              <div className='flex-1 ml-3 lg:ml-0 space-y-1'>
                <h3 className='font-medium text-sm line-clamp-2'>
                  {video.title}
                </h3>
                <div className='flex justify-between items-center'>
                  <span className='text-xs text-gray-500'>{video.topic}</span>
                  <span className='text-xs text-gray-500'>
                    {video.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Player Container */}
        <div className='flex flex-col overflow-hidden rounded-2xl shadow-lg order-1 lg:order-2 w-full lg:w-[800px]'>
          <div className='relative pt-[56.25%]'>
            <ReactPlayer
              controls={true}
              url={selectedVideo.url}
              width='100%'
              height='100%'
              className='absolute top-0 left-0'
            />
          </div>
          <div className='p-4 lg:p-6 bg-white'>
            <h2 className='text-lg lg:text-xl font-bold mb-2'>
              {selectedVideo.title}
            </h2>
            <p className='text-sm lg:text-base text-gray-600 mb-4'>
              {selectedVideo.description}
            </p>
            <div className='flex flex-wrap gap-2'>
              {selectedVideo.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className='bg-gray-100 px-2 lg:px-3 py-1 rounded-full text-xs text-gray-600'>
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
