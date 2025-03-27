import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { TooltipProvider } from './components/tooltip/tooltip';
import { HelmetData } from './helmet/helmet-data';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingFallback } from './components/loading-fallback/loading-fallback';

export const App = () => {
    return (
        <React.Suspense fallback={<LoadingFallback />}>
            <HelmetProvider>
                <HelmetData />
                <TooltipProvider>
                    <RouterProvider router={router} />
                </TooltipProvider>
            </HelmetProvider>
        </React.Suspense>
    );
};
