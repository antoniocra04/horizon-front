'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  Briefcase,
  Calendar,
  Edit2,
  Lock,
  Mail,
  MapPin,
  Phone,
  Settings,
  User
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserHeader } from '@/components/userHeader';

export const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <UserHeader />
      <div className='container mx-auto p-4 md:p-8'>
        <motion.h1
          className='text-3xl font-bold mb-8'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          User Profile
        </motion.h1>

        <Tabs defaultValue='personal' className='w-full'>
          <TabsList className='mb-4'>
            <TabsTrigger value='personal'>Personal Info</TabsTrigger>
            <TabsTrigger value='security'>Security</TabsTrigger>
            <TabsTrigger value='preferences'>Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value='personal'>
            <motion.div variants={containerVariants} initial='hidden' animate='visible'>
              <Card>
                <CardHeader>
                  <div className='flex justify-between items-center'>
                    <CardTitle>Personal Information</CardTitle>
                    <Button variant='outline' size='sm' onClick={() => setIsEditing(!isEditing)}>
                      <Edit2 className='mr-2 h-4 w-4' />
                      {isEditing ? 'Save' : 'Edit'}
                    </Button>
                  </div>
                  <CardDescription>Manage your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div className='flex flex-col md:flex-row gap-8' variants={itemVariants}>
                    <div className='flex-shrink-0'>
                      <Avatar className='w-32 h-32'>
                        <AvatarImage src='/placeholder.svg' alt='User avatar' />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className='flex-grow space-y-4'>
                      <motion.div
                        className='grid grid-cols-1 md:grid-cols-2 gap-4'
                        variants={containerVariants}
                      >
                        <motion.div variants={itemVariants}>
                          <Label htmlFor='name'>Name</Label>
                          <div className='flex items-center'>
                            <User className='mr-2 h-4 w-4 text-muted-foreground' />
                            <Input id='name' defaultValue='John Doe' readOnly={!isEditing} />
                          </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Label htmlFor='email'>Email</Label>
                          <div className='flex items-center'>
                            <Mail className='mr-2 h-4 w-4 text-muted-foreground' />
                            <Input
                              id='email'
                              defaultValue='john@example.com'
                              readOnly={!isEditing}
                            />
                          </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Label htmlFor='phone'>Phone</Label>
                          <div className='flex items-center'>
                            <Phone className='mr-2 h-4 w-4 text-muted-foreground' />
                            <Input
                              id='phone'
                              defaultValue='+1 (555) 123-4567'
                              readOnly={!isEditing}
                            />
                          </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Label htmlFor='location'>Location</Label>
                          <div className='flex items-center'>
                            <MapPin className='mr-2 h-4 w-4 text-muted-foreground' />
                            <Input
                              id='location'
                              defaultValue='New York, USA'
                              readOnly={!isEditing}
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </CardContent>
                <CardFooter>
                  <motion.div
                    className='flex flex-wrap gap-2'
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                  >
                    <motion.div variants={itemVariants}>
                      <Badge variant='secondary'>
                        <Briefcase className='mr-1 h-3 w-3' />
                        Developer
                      </Badge>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Badge variant='secondary'>
                        <Calendar className='mr-1 h-3 w-3' />
                        Joined 2023
                      </Badge>
                    </motion.div>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value='security'>
            <motion.div variants={containerVariants} initial='hidden' animate='visible'>
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div className='space-y-4' variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                      <Label htmlFor='password'>Password</Label>
                      <div className='flex items-center'>
                        <Lock className='mr-2 h-4 w-4 text-muted-foreground' />
                        <Input id='password' type='password' value='••••••••' readOnly />
                      </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Label htmlFor='two-factor'>Two-Factor Authentication</Label>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm text-muted-foreground'>Enabled</span>
                        <Button variant='outline' size='sm'>
                          Configure
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value='preferences'>
            <motion.div variants={containerVariants} initial='hidden' animate='visible'>
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div className='space-y-4' variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                      <Label htmlFor='language'>Language</Label>
                      <div className='flex items-center'>
                        <Settings className='mr-2 h-4 w-4 text-muted-foreground' />
                        <Input id='language' defaultValue='English' readOnly />
                      </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Label htmlFor='notifications'>Email Notifications</Label>
                      <div className='flex items-center justify-between'>
                        <Bell className='mr-2 h-4 w-4 text-muted-foreground' />
                        <Button variant='outline' size='sm'>
                          Manage
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
