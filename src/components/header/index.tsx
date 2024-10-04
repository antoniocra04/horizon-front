import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button } from '../ui/button';

export const Header = () => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 100 }}
    className='px-4 lg:px-6 h-14 flex items-center justify-center'
  >
    <div className='container flex items-center justify-between'>
      <Link to='/' className='flex items-center justify-center'>
        <img src='/logo.webp' alt='Логотип Горизонт' className='h-12 w-auto' />
        <span className='text-xl font-semibold'>Горизонт</span>
      </Link>
      <nav className='flex gap-4 sm:gap-6 items-center'>
        <Link to='#' className='text-sm font-medium hover:underline underline-offset-4'>
          Функции
        </Link>
        <Link
          to='/documentation'
          className='text-sm font-medium hover:underline underline-offset-4'
        >
          Документация
        </Link>
        <Link to='#' className='text-sm font-medium hover:underline underline-offset-4'>
          О нас
        </Link>
        <Button>Получить API ключ</Button>
      </nav>
    </div>
  </motion.header>
);
