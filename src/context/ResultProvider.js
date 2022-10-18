import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseURL = 'https://www.googleapis.com/customsearch/v1';
const youtubeURL = 'https://www.googleapis.com/youtube/v3';
const key = 'AIzaSyAayjXzkmrfMOUGcSLzNDDTlbptf-NqSL4';
const searchID = 'e14c81be61c5d4977';

export const ResultProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('superman');

    const getResults = async (type) => {
        setIsLoading(true);

        var requestUrl;
        if (type === 'image'){
            requestUrl = `${baseURL}?key=${key}&cx=${searchID}&searchType=image&q=${searchTerm}`
        } else if (type === 'video'){
            requestUrl = `${youtubeURL}/search?part=snippet&key=${key}&q=${searchTerm}`
        } else {
            requestUrl = `${baseURL}?key=${key}&cx=${searchID}&q=${searchTerm}`
        }

       const response = await fetch(requestUrl, {
        method: 'GET'
    })

        const data = await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);