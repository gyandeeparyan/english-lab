import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ebookData } from "@/data/ebooks";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Ebooks = () => {
  const { number } = useParams();
  const standardKey = `standard${number || "1"}`;
  const books = ebookData[standardKey] || [];

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
              <BreadcrumbLink href='/learn'>Standard {number} </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>E-Books</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {books.map((book) => (
          <Card key={book.id} className='flex flex-col h-full'>
            <CardHeader>
              <img
                src={book.coverImage}
                alt={book.title}
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <CardTitle className='text-lg mt-2'>{book.title}</CardTitle>
              <CardDescription>by {book.author}</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
              <p className='text-sm text-gray-600 mb-2'>{book.description}</p>
              <div className='flex flex-wrap gap-2 mt-2'>
                <span className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>
                  {book.category}
                </span>
                <span className='text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full'>
                  {book.level}
                </span>
                <span className='text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full'>
                  {book.pages} pages
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <a
                href={book.pdfUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full'>
                <Button className='w-full'>Read Book</Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
