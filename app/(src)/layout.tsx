import { NavbarWrapper } from '@/components/NavbarWrapper'
import { Footer } from '@/components/Footer'
import React from 'react'
import SidebarWrapper from '@/components/SidebarWrapper'
import { FilterProvider } from '@/components/FilterContext'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <FilterProvider>
      <main className="min-h-screen flex flex-col">
        <NavbarWrapper />
        <div className="flex flex-col md:flex-row flex-1 gap-3 pb-5 pt-5">
          <SidebarWrapper />
          <div className="flex-1">
            {children}
          </div>
        </div>
        <Footer />
      </main>
    </FilterProvider>
  )
};

export default layout

