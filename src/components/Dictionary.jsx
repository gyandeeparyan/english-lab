import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Search, Volume2, VolumeX } from "lucide-react";

const formSchema = z.object({
  word: z.string().min(1, "Word is required"),
});

export const Dictionary = () => {
  const [wordData, setWordData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  



  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: "",
      username: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${data.word}`
      );
      if (!response.ok) throw new Error("Word not found");
      const result = await response.json();
      console.log(result);
      setWordData(result[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const playAudio = (audioUrl) => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    console.log(audio);
    audio.onplay = () => setIsPlaying(true);
    audio.onended = () => setIsPlaying(false);
    audio.play();
  };

  return (
    <div className='container mx-auto p-6 max-w-3xl'>
      <h2 className='text-3xl font-bold mb-6'>Dictionary</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='flex gap-2'>
          <Input
            {...form.register("word")}
            placeholder='Enter a word'
            className='w-full'
          />
          <Button type='submit' disabled={isLoading}>
            {isLoading ? (
              <Loader2 className='animate-spin' />
            ) : (
              <Search className='w-4 h-4' />
            )}
          </Button>
        </div>
        {form.formState.errors.word && (
          <p className='text-red-500 text-sm'>
            {form.formState.errors.word.message}
          </p>
        )}
      </form>

      {error && (
        <Card className='p-4 mt-4 bg-red-50 text-red-600'>{error}</Card>
      )}

      {wordData && (
        <div className='mt-6 space-y-6'>
          <Card className='p-6'>
            <div className='flex items-baseline gap-4'>
              <h1 className='text-4xl font-bold'>{wordData.word}</h1>
              <div className='flex items-center gap-2'>
                {wordData.phonetic && (
                  <span className='text-gray-500'>{wordData.phonetic}</span>
                )}
                {wordData.phonetics?.some((p) => p.audio) && (
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() =>
                      playAudio(wordData.phonetics.find((p) => p.audio)?.audio)
                    }>
                    {isPlaying ? (
                      <Volume2 className='w-4 h-4 text-purple-600' />
                    ) : (
                      <Volume2 className='w-4 h-4' />
                    )}
                  </Button>
                )}
              </div>
            </div>

            {wordData.meanings?.map((meaning, index) => (
              <div key={index} className='mt-6'>
                <h3 className='text-lg font-semibold text-purple-600'>
                  {meaning.partOfSpeech}
                </h3>
                <div className='mt-2 space-y-4'>
                  {meaning.definitions.map((def, idx) => (
                    <div key={idx} className='pl-4 border-l-2 border-gray-200'>
                      <p className='text-gray-800'>{def.definition}</p>
                      {def.example && (
                        <p className='mt-1 text-gray-600 italic'>
                          "{def.example}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
};
