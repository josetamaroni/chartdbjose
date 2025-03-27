import React, { Suspense, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { TooltipProvider } from './components/tooltip/tooltip';
import { HelmetData } from './helmet/helmet-data';
import { HelmetProvider } from 'react-helmet-async';

const LoadingFallback = () => (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'white'
    }}>
        <div>Loading...</div>
    </div>
);

export const App = () => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <HelmetProvider>
            <HelmetData />
            <TooltipProvider>
                <Suspense fallback={<LoadingFallback />}>
                    {isHydrated ? (
                        <RouterProvider router={router} />
                    ) : (
                        <LoadingFallback />
                    )}
                </Suspense>
            </TooltipProvider>
        </HelmetProvider>
    );
};
