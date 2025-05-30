import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Videos from "./Videos";
import { Ebooks } from "./Ebooks";
import Games from "./Games";

export const ClassContent = () => {
  return (
    <div className='relative'>
      <div className='sticky top-0 z-50 bg-white shadow-sm mb-6'>
        <div className='max-w-screen-xl mx-auto py-4'>
          <Tabs defaultValue='videos' className='w-full'>
            <div className='flex justify-center'>
              <TabsList className='gap-2'>
                <TabsTrigger value='videos'>Videos</TabsTrigger>
                <TabsTrigger value='ebooks'>E-Books</TabsTrigger>
                <TabsTrigger value='games'>Games</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value='videos'>
              <Videos />
            </TabsContent>
            <TabsContent value='ebooks'>
              <Ebooks />
            </TabsContent>
            <TabsContent value='games'>
              <Games />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
