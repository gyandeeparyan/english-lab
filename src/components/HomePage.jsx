import React from "react";
import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { classList } from "@/data/classinfo";
import { Button } from "./ui/button";

export const HomePage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
      {classList.map((item) => (
        <>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {item.activities.map((item) => (
                  <p>{item}</p>
                ))}
              </CardContent>
              <CardFooter>
                <Link to={`/class/${item.standard}`}>
                  <Button>Open</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </>
      ))}
    </div>
  );
};
