import React from 'react';
import { Hearts } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
        <Hearts color="#FF0000" height="55" width="80" />
    </div>
  )
}
