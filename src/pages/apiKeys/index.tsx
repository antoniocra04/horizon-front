'use client';

import { useState } from 'react';
import { useToast } from '@hooks/use-toast';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Key, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserHeader } from '@/components/userHeader';

export const ApiKeysPage = () => {
  const [apiKeys, setApiKeys] = useState<Array<{ id: string; name: string; key: string }>>([]);
  const [newKeyName, setNewKeyName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);
  const { toast } = useToast();

  const generateApiKey = () => {
    const key = `dk_${Math.random().toString(36).substr(2, 9)}${Math.random().toString(36).substr(2, 9)}`;
    const newKey = { id: Date.now().toString(), name: newKeyName, key };
    setApiKeys([...apiKeys, newKey]);
    setNewKeyName('');
    setIsDialogOpen(false);
    toast({
      title: 'API ключ создан',
      description: 'Ваш новый API ключ был успешно создан.'
    });
  };

  const deleteApiKey = (idToDelete: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== idToDelete));
    toast({
      title: 'API ключ удален',
      description: 'API ключ был успешно удален.'
    });
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKeyId(id);
    setTimeout(() => setCopiedKeyId(null), 2000);
    toast({
      title: 'API ключ скопирован',
      description: 'API ключ был скопирован в буфер обмена.'
    });
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <UserHeader />
      <div className='container mx-auto p-4 md:p-8'>
        <motion.h1
          className='text-3xl font-bold mb-8'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          API Ключи
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Управление API ключами</CardTitle>
              <CardDescription>
                Создавайте и управляйте вашими API ключами для DynamicAuth
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              {apiKeys.length > 0 ? (
                <ul className='space-y-2'>
                  <AnimatePresence>
                    {apiKeys.map((apiKey) => (
                      <motion.li
                        key={apiKey.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className='flex items-center justify-between p-2 bg-muted rounded'
                      >
                        <div>
                          <p className='font-medium'>{apiKey.name}</p>
                          <code className='text-sm'>{apiKey.key.slice(0, 10)}...</code>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => copyToClipboard(apiKey.id, apiKey.key)}
                          >
                            {copiedKeyId === apiKey.id ? (
                              <Check className='h-4 w-4 text-green-500' />
                            ) : (
                              <Copy className='h-4 w-4' />
                            )}
                            <span className='sr-only'>Копировать API ключ</span>
                          </Button>
                          <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => deleteApiKey(apiKey.id)}
                          >
                            <Trash className='h-4 w-4' />
                            <span className='sr-only'>Удалить API ключ</span>
                          </Button>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              ) : (
                <p className='text-muted-foreground'>API ключи еще не созданы.</p>
              )}
            </CardContent>
            <CardFooter>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className='w-full'>
                    <Key className='mr-2 h-4 w-4' />
                    Создать новый API ключ
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Создать новый API ключ</DialogTitle>
                    <DialogDescription>
                      Введите имя для вашего нового API ключа. Это поможет вам идентифицировать его
                      назначение позже.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='py-4'>
                    <Label htmlFor='key-name' className='text-right'>
                      Имя ключа
                    </Label>
                    <Input
                      id='key-name'
                      value={newKeyName}
                      onChange={(e) => setNewKeyName(e.target.value)}
                      placeholder='например, Ключ для продакшена'
                    />
                  </div>
                  <DialogFooter>
                    <Button onClick={generateApiKey} disabled={!newKeyName.trim()}>
                      Создать ключ
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
