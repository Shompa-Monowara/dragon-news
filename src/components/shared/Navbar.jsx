'use client';
import Image from 'next/image';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    console.log(user, isPending, "user")
      
    // const handleLogout = async () => {
    //     await authClient.signOut();
    // };

    return (
        <div className="container mx-auto flex justify-between items-center mt-6">
            
            <div></div>

            <ul className="flex justify-between items-center text-gray-700 gap-3">
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about-us'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            
            <div className="flex items-center gap-2">
                {isPending ?<span className="loading loading-spinner loading-lg"></span>
                : user ? (
                    <>
                        <h2>Hello, {user.name}</h2>
                        <Image 
                            src={user.image || userAvatar} 
                            alt="User avatar" 
                            width={40} 
                            height={40} 
                            className="rounded-full"
                        />
                        <button 
                           onClick={async () => await authClient.signOut()}
                            className="btn bg-purple-500 text-white btn-sm"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link href={'/login'}>
                        <button className='btn bg-purple-500 text-white'>Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;