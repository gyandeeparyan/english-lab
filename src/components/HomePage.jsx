import React from "react";
import { Link } from "react-router";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";

const colorScheme = {
  1: {
    bg: "bg-gradient-to-r from-blue-400 to-indigo-500",
    hover: "hover:from-blue-500 hover:to-indigo-600",
  },
  2: {
    bg: "bg-gradient-to-r from-purple-400 to-pink-500",
    hover: "hover:from-purple-500 hover:to-pink-600",
  },
  3: {
    bg: "bg-gradient-to-r from-green-400 to-teal-500",
    hover: "hover:from-green-500 hover:to-teal-600",
  },
  4: {
    bg: "bg-gradient-to-r from-orange-400 to-pink-500",
    hover: "hover:from-orange-500 hover:to-pink-600",
  },
  5: {
    bg: "bg-gradient-to-r from-cyan-400 to-blue-500",
    hover: "hover:from-cyan-500 hover:to-blue-600",
  },
  6: {
    bg: "bg-gradient-to-r from-fuchsia-400 to-purple-500",
    hover: "hover:from-fuchsia-500 hover:to-purple-600",
  },
  7: {
    bg: "bg-gradient-to-r from-rose-400 to-red-500",
    hover: "hover:from-rose-500 hover:to-red-600",
  },
  8: {
    bg: "bg-gradient-to-r from-amber-400 to-orange-500",
    hover: "hover:from-amber-500 hover:to-orange-600",
  },
  9: {
    bg: "bg-gradient-to-r from-violet-400 to-indigo-500",
    hover: "hover:from-violet-500 hover:to-indigo-600",
  },
  10: {
    bg: "bg-gradient-to-r from-emerald-400 to-teal-500",
    hover: "hover:from-emerald-500 hover:to-teal-600",
  },
};

export const HomePage = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-6 text-center'>
        English Conversation Lab 
      </h1>
      <div className='grid grid-cols-1  md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((standard) => (
          <Link key={standard} to={`/class/${standard}`}>
            <Card
              className={`${colorScheme[standard].bg} ${colorScheme[standard].hover} transition-all duration-300 transform hover:scale-105 cursor-pointer h-full shadow-lg hover:shadow-xl backdrop-blur-sm`}>
              <CardContent className='p-6 flex flex-col items-center justify-center text-white'>
                <span className='text-5xl sm:text-6xl md:text-7xl font-bold mb-2'>
                  {standard}
                </span>
                <span className='text-sm sm:text-base'>Standard</span>
              </CardContent>
              <CardFooter className='p-2 bg-black/10 flex justify-center'>
                <Button
                  variant='link'
                  className='text-white hover:text-white/90'>
                  Enter Class
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
