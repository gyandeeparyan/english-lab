import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const ClassContent = () => {


  return (
<div >
<div className="flex items-center justify-center  mt-10">
<Tabs defaultValue="account" className=" ">
  <TabsList className={"gap-2"}>
    <TabsTrigger value="account">Videos</TabsTrigger>
    <TabsTrigger value="password">E-Books</TabsTrigger>
      <TabsTrigger value="games">Games</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
  <TabsContent value="games">Game</TabsContent>
</Tabs>

</div>
  </div>
  );
};
