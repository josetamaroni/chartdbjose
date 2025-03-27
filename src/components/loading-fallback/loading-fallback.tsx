import React from 'react';

export const LoadingFallback = () => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'white',
        }}
    >
        <div>Loading...</div>
    </div>
); 