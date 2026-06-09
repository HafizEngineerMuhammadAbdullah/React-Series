import React from 'react';


const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-8 px-18 bg-white'>
            <h4 className='bg-black text-white  py-2 px-6 uppercase rounded-full'>Target Audience</h4>
            <button className='bg-gray-200 py-2 px-6 uppercase rounded-full tracking-widest text-sm'>Digital Banking Platform</button>
        </nav>
    );
}

export default Navbar;  