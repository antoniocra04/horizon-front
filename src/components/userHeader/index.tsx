import { Link, useLocation } from 'react-router-dom';
import { LogOut, Menu, User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { Button } from '../ui/button';

export const UserHeader = () => {
  const location = useLocation();
  return (
    <header className='bg-white border-b border-gray-200'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <img src='/logo.webp' alt='logo' className='h-12 w-auto' />
            <nav className='hidden md:ml-6 md:flex md:space-x-8'>
              <Link
                to='/profile'
                className={`${location.pathname === '/profile' && 'bg-gray-100'} text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Профиль
              </Link>
              <Link
                to='/api-keys'
                className={`${location.pathname === '/api-keys' && 'bg-gray-100'} text-gray-900 px-3 py-2 rounded-md text-sm font-medium`}
              >
                API Ключи
              </Link>
            </nav>
          </div>
          <div className='flex items-center'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                  <User className='h-5 w-5' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className='mr-2 h-4 w-4' />
                  <span>Профиль</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className='mr-2 h-4 w-4' />
                  <span>Выйти</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className='ml-4 md:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
