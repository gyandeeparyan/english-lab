import React from "react";
import { useParams } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { classContent } from "@/data/classContent";

export const ClassContent = () => {
  const { number } = useParams();
  const content = classContent[number] || {};

  return (
    <div>
      <div className='flex items-center justify-center mt-10'>
        <Tabs defaultValue='videos' className=' '>
          <TabsList className={"gap-2"}>
            <TabsTrigger value='videos'>Videos</TabsTrigger>
            <TabsTrigger value='ebooks'>E-Books</TabsTrigger>
            <TabsTrigger value='games'>Games</TabsTrigger>
          </TabsList>
          <TabsContent value='videos'>
            <ul>
              {content.videos?.map((video, index) => (
                <li key={index}>{video}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value='ebooks'>
            <ul>
              {content.ebooks?.map((book, index) => (
                <li key={index}>{book}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value='games'>
            <ul>
              {content.games?.map((game, index) => (
                <li key={index}>{game}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
