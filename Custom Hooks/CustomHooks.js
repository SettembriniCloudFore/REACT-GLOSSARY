import {React, useState} from 'react';

export function useCustomLink(route, closeMe){
   
    return {
        style:{
            textDecoration: 'none'
        },
        to: route,
        onClick:closeMe,

    }
}

