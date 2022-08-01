import React from 'react';

export default function AppProviders( {children, providers } : any ) {
    /* Import Node Modules for providers */
    /* Map each provider around children */
    return (
        <>{children}</>
    );
    }