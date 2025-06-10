import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Videos from "./Videos";
import { Ebooks } from "./Ebooks";
import Games from "./Games";
import { Ai } from "./Ai";
import { Quiz } from "./Quiz";
import { Dictionary } from "./Dictionary";

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
                <TabsTrigger value='quiz'>Quiz</TabsTrigger>
                <TabsTrigger value='dict'>Dictionary</TabsTrigger>

                <TabsTrigger value='ai'>AI</TabsTrigger>
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
            <TabsContent value='quiz'>
              <Quiz />
            </TabsContent>
            <TabsContent value='dict'>
              <Dictionary />
            </TabsContent>

            <TabsContent value='ai'>
              <Ai />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
