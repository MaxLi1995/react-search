import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../context/ResultProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/video'){
      getResults('video');
    } else if(location.pathname === '/image'){
      getResults('image');
    } else {
      getResults('search');
    }
  }, [searchTerm, location.pathname]);

  if(isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.items?.map(({ link, title  }, index) => (
            <div key={index} className="w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>

      );
    case '/image':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.items?.map(({ link, title }, index) => (
            <a className="sm:p-3 p-5" href={link} key={index} target="_blank" rel="noreferrer">
              <img src={link} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">
                {title}
              </p>
            </a>
          ))}
        </div>
      );
    case '/video':
      return (
        <div className="flex flex-wrap">
          {results?.items?.map((video, index) => (
            <div key={index} className="p-2">
              <ReactPlayer url={'https://www.youtube.com/watch?v='+video.id?.videoId} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      );
  
    default:
      return 'ERROR';
  }
}
