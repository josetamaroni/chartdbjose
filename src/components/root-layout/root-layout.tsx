import React from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingFallback } from '../loading-fallback/loading-fallback';

export const RootLayout = () => {
    return (
        <React.Suspense fallback={<LoadingFallback />}>
            <Outlet />
        </React.Suspense>
    );
}; 