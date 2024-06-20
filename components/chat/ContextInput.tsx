"use client";

import { Textarea } from "@/components/ui/textarea";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";

const UserInput = () => {
  const [value, setValue] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <Textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      className="resize-none px-16 py-6 text-md rounded-none border-0 max-h-32 rounded-l-full"
    />
  );
};

export default UserInput;
