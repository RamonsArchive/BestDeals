import React from 'react';
import Navbar  from './Navbar';
import {auth} from '@/auth';
import {Suspense} from 'react';

export const NavbarWrapper = async () => {
  const session = await auth();

  return (
    <div className="sticky top-0 z-50">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar session={session || undefined} />
      </Suspense>
    </div>
  );
} 

export default NavbarWrapper;