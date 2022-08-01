import React from "react";
import { recursiveReadDir } from "./lib/recursive-readdir";

export default function LayoutProvider( {children, routes } : any ) {
    /* Scan Layout folder */
    const layoutDir = "";
    const layoutPaths = 
          recursiveReadDir(
            layoutDir,
            new RegExp(`\\.(?:${config.pageExtensions.join('|')})$`)
          )
        
    /*  */
return (
    <>{children}</>
);
}