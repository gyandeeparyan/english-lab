import React from "react";
import { useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { gamesData } from "@/data/games";

const Games = () => {
  const { number = "1" } = useParams();
  const standardKey = `standard${number}`;
  const games = gamesData[standardKey] || [];

  return (
    <div className='container mx-auto p-6'>
      <div className='mb-8'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/games'>Standard {number}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Games</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {games.map((game) => (
          <Card
            key={game.id}
            className='flex flex-col hover:shadow-lg transition-shadow'>
            <CardHeader>
              <div className='aspect-video w-full overflow-hidden rounded-lg mb-2'>
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <CardTitle className='text-lg'>{game.title}</CardTitle>
              <CardDescription>{game.topic}</CardDescription>
            </CardHeader>

            <CardContent className='flex-grow space-y-3'>
              <p className='text-sm text-gray-600'>{game.description}</p>
              <div className='flex flex-wrap gap-1.5'>
                {game.skills.map((skill, index) => (
                  <span
                    key={index}
                    className='text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full'>
                    {skill}
                  </span>
                ))}
              </div>
              <div className='grid grid-cols-2 gap-2 text-xs text-gray-500'>
                <div>Difficulty: {game.difficulty}</div>
                <div>Players: {game.maxPlayers}</div>
              </div>
            </CardContent>

            <CardFooter className='border-t pt-4'>
              <a
                href={game.url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full'>
                <Button className='w-full bg-green-600 hover:bg-green-700'>
                  Play Game
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Games;
