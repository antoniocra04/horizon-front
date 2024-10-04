// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {}
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const MainPage = () => {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <Header />
      <main className='flex-1'>
        <section className='w-full pt-12 md:pt-24 lg:pt-32 border-y'>
          <div className='container mx-auto px-4 md:px-6 space-y-10 xl:space-y-16'>
            <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16'>
              <motion.div {...fadeIn}>
                <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                  Безопасность пользователей в наших руках
                </h1>
              </motion.div>
              <motion.div className='flex flex-col items-start space-y-4' {...fadeIn}>
                <p className='max-w-[700px] text-muted-foreground md:text-xl'>
                  Перестаньте беспокоиться о безопасности и доверьтесь нам. Мы знаем, что делаем, в
                  отличие от вас.
                </p>
                <div className='space-x-4'>
                  <Link
                    to='/'
                    className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                  >
                    Подключить систему
                  </Link>
                  <Link
                    to='/'
                    className='inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                  >
                    Связаться с нами
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className='flex justify-center'
            >
              <img
                src='/lock.webp'
                alt='Герой'
                className='aspect-[3/1] w-full max-w-[1300px] overflow-hidden rounded-t-xl object-cover'
              />
            </motion.div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container mx-auto space-y-12 px-4 md:px-6'>
            <motion.div
              className='flex flex-col items-center justify-center space-y-4 text-center'
              {...fadeIn}
            >
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  Новые функции
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Быстрее итерации. Больше инноваций.
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Платформа для быстрого прогресса. Позвольте вашей команде сосредоточиться на
                  доставке функций вместо управления инфраструктурой с автоматизированным CI/CD,
                  встроенным тестированием и интегрированным сотрудничеством.
                </p>
              </div>
            </motion.div>
            <motion.div
              className='mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'
              variants={staggerChildren}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                {
                  title: 'Бесконечная масштабируемость, нулевая конфигурация',
                  description:
                    'Позволяет коду работать по требованию без необходимости управлять собственной инфраструктурой или обновлять оборудование.'
                },
                {
                  title: 'Аналитика и управление в реальном времени',
                  description:
                    'Получайте детальные метрики производительности сайта от реальных пользователей для каждого развертывания.'
                },
                {
                  title: 'Персонализация на границе',
                  description:
                    'Доставляйте динамический, персонализированный контент, обеспечивая при этом, чтобы пользователи видели только лучшую версию вашего сайта.'
                },
                {
                  title: 'Аналитика и управление в реальном времени',
                  description:
                    'Получайте детальные метрики производительности сайта от реальных пользователей для каждого развертывания.'
                },
                {
                  title: 'Персонализация на границе',
                  description:
                    'Доставляйте динамический, персонализированный контент, обеспечивая при этом, чтобы пользователи видели только лучшую версию вашего сайта.'
                },
                {
                  title: 'Бесконечная масштабируемость, нулевая конфигурация',
                  description:
                    'Позволяет коду работать по требованию без необходимости управлять собственной инфраструктурой или обновлять оборудование.'
                }
              ].map((feature, index) => (
                <motion.div key={index} className='grid gap-1' variants={fadeIn}>
                  <h3 className='text-lg font-bold'>{feature.title}</h3>
                  <p className='text-sm text-muted-foreground'>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className='flex justify-center flex-col sm:flex-row items-center gap-4'
              {...fadeIn}
            >
              <Link
                to='#'
                className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Связаться с отделом продаж
              </Link>
              <Link
                to='#'
                className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Тур по платформе
              </Link>
            </motion.div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
          <motion.div
            className='container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6'
            {...fadeIn}
          >
            <div className='space-y-3'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Испытайте рабочий процесс, который любят лучшие фронтенд-команды.
              </h2>
              <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Позвольте вашей команде сосредоточиться на доставке функций вместо управления
                инфраструктурой с автоматизированным CI/CD.
              </p>
            </div>
            <div className='mx-auto w-full max-w-sm space-y-2'>
              <form className='flex gap-2'>
                <Input type='email' placeholder='Введите ваш email' className='max-w-lg flex-1' />
                <Button type='submit'>Подписаться</Button>
              </form>
              <p className='text-xs text-muted-foreground'>
                Подпишитесь, чтобы получать уведомления о нашем запуске.{' '}
                <Link to='/terms' className='underline underline-offset-2'>
                  Условия и положения
                </Link>
              </p>
            </div>
          </motion.div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container mx-auto px-4 md:px-6'>
            <motion.div
              className='flex flex-col items-center justify-center space-y-4 text-center'
              {...fadeIn}
            >
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  Новые функции
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Быстрее итерации. Больше инноваций.
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Платформа для быстрого прогресса. Позвольте вашей команде сосредоточиться на
                  доставке функций вместо управления инфраструктурой с автоматизированным CI/CD,
                  встроенным тестированием и интегрированным сотрудничеством.
                </p>
              </div>
            </motion.div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src='/lock.webp'
                  alt='Изображение'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                />
              </motion.div>
              <motion.div
                className='flex flex-col justify-center space-y-4'
                variants={staggerChildren}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true, amount: 0.3 }}
              >
                <ul className='grid gap-6'>
                  <motion.li variants={fadeIn}>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Сотрудничество</h3>
                      <p className='text-muted-foreground'>
                        Сделайте сотрудничество беспрепятственным с встроенными инструментами
                        проверки кода.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Автоматизация</h3>
                      <p className='text-muted-foreground'>
                        Автоматизируйте ваш рабочий процесс с непрерывной интеграцией.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Масштабирование</h3>
                      <p className='text-muted-foreground'>
                        Разверните в облаке одним кликом и масштабируйтесь с легкостью.
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
          <motion.div
            className='container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'
            {...fadeIn}
          >
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Испытайте рабочий процесс, который любят лучшие фронтенд-команды.
              </h2>
              <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Позвольте вашей команде сосредоточиться на доставке функций вместо управления
                инфраструктурой с автоматизированным CI/CD.
              </p>
            </div>
            <div className='flex gap-4 justify-center lg:justify-end'>
              <Link
                to='#'
                className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Связаться с отделом продаж
              </Link>
              <Link
                to='#'
                className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Узнать больше
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <motion.footer
        className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className='text-xs text-center text-muted-foreground'>
          © {new Date().getFullYear()} Горизонт. Все права защищены.
        </p>
        <nav className='flex gap-4 sm:gap-6'>
          <Link to='#' className='text-xs hover:underline underline-offset-4'>
            Условия обслуживания
          </Link>
          <Link to='#' className='text-xs hover:underline underline-offset-4'>
            Конфиденциальность
          </Link>
        </nav>
      </motion.footer>
    </div>
  );
};
