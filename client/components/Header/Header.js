import React from 'react';

function Logo() {
    return 'Loho';
}

export default function Header() {
    return (
        <header style={{ backgroundColor: '#292961', color: 'white' }}>
            <Logo />
        </header>
    );
}
