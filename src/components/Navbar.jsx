import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='font-bold text-3xl'>
            <Link href='/dashboard'>admin</Link>
        </div>
    );
};

export default Navbar;