import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from '../context/ResultProvider';
import { Links } from "./Links"

export const Search = () => {
  const [text, setText] = useState('superman');
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 500);

  useEffect(() => {
    if(debounceValue) setSearchTerm(debounceValue)
  }, [debounceValue])

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:mt-10 mt-3">
      <input 
      value={text} 
      type="text" 
      className="sm:w-96 w-80 h-10 dark:bg-gray-200 boarder rounded-full shadow-sm ouline-none p-6 text-black hover:shadow-lg"
      placeholder="type search or input url"
      onChange={(e) => setText(e.target.value)}
      /> 
      {text && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={() => setText('')}>
          x
        </button>
      )} 
      <Links />
    </div>
  )
}
