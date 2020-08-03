import React from 'react';

type LinkProps = {
    active : boolean ,
    children : React.ReactNode ,
    onClick : VoidFunction
};

export const Link = ({ active , children , onClick } : LinkProps) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft : '4px'
        }}
    >
        { children }
    </button>
);