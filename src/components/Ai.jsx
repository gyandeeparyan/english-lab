import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { speakingData } from "@/data/assessmentData";
import { Button } from "./ui/button";

export const Ai = () => {
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const handleToggle = () => {
    if (!SpeechRecognition) {
      alert("Web Speech API is not supported in this browser.");
      return;
    }
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.interimResults = true;
      recognitionRef.current.continuous = true; // Keep listening
      recognitionRef.current.onresult = (event) => {
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          console.log(event);
          interimTranscript += event.results[i][0].transcript;
        }
        setTranscript(interimTranscript);
      };
      recognitionRef.current.onerror = (event) => {
        alert("Speech recognition error: " + event.error);
        setListening(false);
      };
      recognitionRef.current.onend = () => {
        if (listening) {
          recognitionRef.current.start(); // Restart if stopped unexpectedly
        }
      };
    }

    if (!listening) {
      recognitionRef.current.start();
      setListening(true);
    } else {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return (
    <div className='flex items-center justify-center flex-row gap-4 h-screen'>
      {/* Paragraph Display Container -Left Side */}
      <Card className='w-[50%] h-[50%]'>
        <CardContent>
          <p>{speakingData[2].level}</p>
          <p>{speakingData[2].title}</p>
          <text>{speakingData[2].text}</text>

          <Button onClick={handleToggle}>
            {" "}
            {listening ? "Listening..." : "Speak"}
          </Button>
        </CardContent>
      </Card>

      {/* Output of User's SpeechToText */}
      <Card className='w-[50%] h-[50%]'>
        <CardContent>{transcript}</CardContent>
      </Card>
    </div>
  );
};
