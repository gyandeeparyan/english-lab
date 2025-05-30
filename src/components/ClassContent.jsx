import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Videos from "./Videos";
import { Ebooks } from "./Ebooks";
import Games from "./Games";

export const ClassContent = () => {
  // const { number } = useParams();
  // const content = classContent[number] || {};

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
            <Videos/>
          </TabsContent>
          <TabsContent value='ebooks'>
            <Ebooks/>
          </TabsContent>
          <TabsContent value='games'>
            <Games/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
