import React, { ReactNode } from 'react';

const ContentWidth = ({children}: {children: ReactNode}) => {
    return (
        <div className='max-w-7xl mx-auto'>
            {children}
        </div>
    );
};

export default ContentWidth;