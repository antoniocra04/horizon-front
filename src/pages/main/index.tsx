'use client';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  KeyIcon,
  LockIcon,
  Mountain,
  RefreshCwIcon,
  ShieldIcon,
  UserIcon
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className='px-4 lg:px-6 h-14 flex items-center justify-center'
      >
        <div className='container flex items-center justify-between'>
          <Link href='/' className='flex items-center justify-center'>
            <Mountain className='h-6 w-6' />
            <span className='sr-only'>Horizon</span>
          </Link>
          <nav className='flex gap-4 sm:gap-6'>
            <Link href='#' className='text-sm font-medium hover:underline underline-offset-4'>
              Features
            </Link>
            <Link href='#' className='text-sm font-medium hover:underline underline-offset-4'>
              Pricing
            </Link>
            <Link href='#' className='text-sm font-medium hover:underline underline-offset-4'>
              About
            </Link>
            <Link href='#' className='text-sm font-medium hover:underline underline-offset-4'>
              Contact
            </Link>
          </nav>
        </div>
      </motion.header>
      <main className='flex-1'>
        <section className='w-full pt-12 md:pt-24 lg:pt-32 border-y'>
          <div className='container mx-auto px-4 md:px-6 space-y-10 xl:space-y-16'>
            <div className='grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16'>
              <motion.div {...fadeIn}>
                <h1 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                  User security is in our hands
                </h1>
              </motion.div>
              <motion.div className='flex flex-col items-start space-y-4' {...fadeIn}>
                <p className='max-w-[700px] text-muted-foreground md:text-xl'>
                  Stop worrying about security and trust us. We know what we're doing, unlike you.
                </p>
                <div className='space-x-4'>
                  <Link
                    href='/'
                    className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                  >
                    Connect System
                  </Link>
                  <Link
                    href='/'
                    className='inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                  >
                    Contact Us
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
                src='/placeholder.svg'
                alt='Hero'
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
                  New Features
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Faster iteration. More innovation.
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  The platform for rapid progress. Let your team focus on shipping features instead
                  of managing infrastructure with automated CI/CD, built-in testing, and integrated
                  collaboration.
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
                  title: 'Infinite scalability, zero config',
                  description:
                    'Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.'
                },
                {
                  title: 'Real-time insights and controls',
                  description:
                    'Get granular, first-party, real-user metrics on site performance per deployment.'
                },
                {
                  title: 'Personalization at the edge',
                  description:
                    'Deliver dynamic, personalized content, while ensuring users only see the best version of your site.'
                },
                {
                  title: 'Real-time insights and controls',
                  description:
                    'Get granular, first-party, real-user metrics on site performance per deployment.'
                },
                {
                  title: 'Personalization at the edge',
                  description:
                    'Deliver dynamic, personalized content, while ensuring users only see the best version of your site.'
                },
                {
                  title: 'Infinite scalability, zero config',
                  description:
                    'Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.'
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
                href='#'
                className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Contact Sales
              </Link>
              <Link
                href='#'
                className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Tour the Platform
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
                Experience the workflow the best frontend teams love.
              </h2>
              <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Let your team focus on shipping features instead of managing infrastructure with
                automated CI/CD.
              </p>
            </div>
            <div className='mx-auto w-full max-w-sm space-y-2'>
              <form className='flex gap-2'>
                <Input type='email' placeholder='Enter your email' className='max-w-lg flex-1' />
                <Button type='submit'>Sign Up</Button>
              </form>
              <p className='text-xs text-muted-foreground'>
                Sign up to get notified when we launch.{' '}
                <Link href='/terms' className='underline underline-offset-2'>
                  Terms &amp; Conditions
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
                  New Features
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Faster iteration. More innovation.
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  The platform for rapid progress. Let your team focus on shipping features instead
                  of managing infrastructure with automated CI/CD, built-in testing, and integrated
                  collaboration.
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
                  src='/placeholder.svg'
                  alt='Image'
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
                      <h3 className='text-xl font-bold'>Collaboration</h3>
                      <p className='text-muted-foreground'>
                        Make collaboration seamless with built-in code review tools.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Automation</h3>
                      <p className='text-muted-foreground'>
                        Automate your workflow with continuous integration.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Scale</h3>
                      <p className='text-muted-foreground'>
                        Deploy to the cloud with a single click and scale with ease.
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
                Experience the workflow the best frontend teams love.
              </h2>
              <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Let your team focus on shipping features instead of managing infrastructure with
                automated CI/CD.
              </p>
            </div>
            <div className='flex gap-4 justify-center lg:justify-end'>
              <Link
                href='#'
                className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Contact Sales
              </Link>
              <Link
                href='#'
                className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Learn more
              </Link>
            </div>
          </motion.div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
            <motion.div className='space-y-3' {...fadeIn}>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Meet our Customers
              </h2>
              <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Trusted by the best teams in the world. We help teams of all sizes.
              </p>
            </motion.div>
            <motion.div
              className='mx-auto max-w-5xl divide-y rounded-lg border'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3'>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    src='/placeholder-logo.svg'
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  />
                </div>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    src='/placeholder-logo.svg'
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  />
                </div>
                <div className='mx-auto flex w-full items-center justify-center p-8'>
                  <img
                    src='/placeholder-logo.svg'
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  />
                </div>
              </div>
              <div className='grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3'>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    src='/placeholder-logo.svg'
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  />
                </div>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    src='/placeholder-logo.svg'
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  />
                </div>
                <div className='mx-auto flex w-full items-center justify-center p-4 sm:p-8'>
                  <img
                    src='/placeholder-logo.svg'
                    alt='Logo'
                    className='aspect-[2/1] overflow-hidden rounded-lg object-contain object-center'
                  />
                </div>
              </div>
            </motion.div>
            <motion.div className='flex justify-center space-x-4' {...fadeIn}>
              <Link
                href='#'
                className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Contact Sales
              </Link>
              <Link
                href='#'
                className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Learn more
              </Link>
            </motion.div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
          <div className='container mx-auto px-4 md:px-6'>
            <motion.div
              className='grid gap-10 px-10 md:gap-16 lg:grid-cols-2'
              variants={staggerChildren}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className='space-y-4' variants={fadeIn}>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  Performance
                </div>
                <h2 className='lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                  Traffic spikes should be exciting, not scary.
                </h2>
                <Link
                  href='#'
                  className='inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div className='flex flex-col items-start space-y-4' variants={fadeIn}>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>Security</div>
                <p className='max-w-[700px] text-muted-foreground md:text-xl/relaxed'>
                  Fully managed infrastructure designed to scale dynamically with your traffic, a
                  global edge to ensure your site is fast for every customer, and the tools to
                  monitor every aspect of your app.
                </p>
                <Link
                  href='#'
                  className='inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                >
                  Contact Sales
                </Link>
              </motion.div>
            </motion.div>
          </div>
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
          © {new Date().getFullYear()} Horizon. All rights reserved.
        </p>
        <nav className='flex gap-4 sm:gap-6'>
          <Link href='#' className='text-xs hover:underline underline-offset-4'>
            Terms of Service
          </Link>
          <Link href='#' className='text-xs hover:underline underline-offset-4'>
            Privacy
          </Link>
        </nav>
      </motion.footer>
    </div>
  );
};
