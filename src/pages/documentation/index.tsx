// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Github, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const isExpanded = (section: string) => expandedSections.includes(section);

  const sections = [
    { id: 'introduction', title: 'Введение' },
    { id: 'how-it-works', title: 'Как это работает' },
    { id: 'api-reference', title: 'Использование API' },
    { id: 'api-key', title: 'Об API ключе' }
  ];

  return (
    <div className='flex flex-col min-h-screen bg-neutral-50'>
      {/* Header */}
      <header className='sticky top-0 z-20 bg-white border-b border-neutral-200'>
        <div className='px-4 py-3 flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Button variant='outline' size='icon' className='md:hidden' onClick={toggleSidebar}>
              <Menu className='h-4 w-4' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
            <Link to='/' className='flex items-center justify-center'>
              <img src='/logo.webp' alt='Логотип Горизонт' className='h-12 w-auto' />
              <span className='text-xl font-semibold'>Горизонт</span>
            </Link>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <Button>Получить API ключ</Button>
            <Button variant='ghost' size='icon'>
              <Github className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </Button>
          </div>
        </div>
      </header>

      <div className='flex flex-1'>
        {/* Sidebar */}
        <aside
          className={`bg-neutral-100 w-64 fixed h-[calc(100vh-3.5rem)] overflow-auto transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-10`}
        >
          <nav className='p-4'>
            <ul className='space-y-2'>
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full text-left py-2 px-4 rounded ${activeSection === section.id ? 'bg-neutral-200' : 'hover:bg-neutral-200'}`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className='flex-1 md:ml-64'>
          <ScrollArea className='h-[calc(100vh-3.5rem)]'>
            <div className='p-4 md:p-8'>
              {activeSection === 'introduction' && (
                <section className='mb-8'>
                  <h2 className='text-2xl font-semibold text-neutral-700 mb-4'>
                    Введение в Горизонт
                  </h2>
                  <p className='text-neutral-600 mb-4'>
                    Горизонт - это сервис аутентификации, обеспечивающий безопасную и динамическую
                    аутентификация на основе временного пароля для ваших приложений. Мы предлагаем
                    надежное решение традиционных уязвимостей статических паролей путем создания
                    одноразовых паролей на основе времени для каждой попытки аутентификации.
                  </p>
                  <p className='text-neutral-600 mb-4'>
                    С помощью Горизонта вы можете легко интегрировать высокозащищенную систему
                    аутентификации. в ваше приложение, что значительно снижает риск связанных с
                    паролем нарушения безопасности.
                  </p>
                  <h3 className='text-xl font-semibold text-neutral-700 mb-2'>
                    Ключевые особенности
                  </h3>
                  <ul className='list-disc list-inside space-y-2 text-neutral-600'>
                    <li>Одноразовые пароли на основе времени (TOTP)</li>
                    <li>Простая интеграция в систему</li>
                    <li>Поддержка многофакторной аутентификации</li>
                    <li>Комплексный API для полного контроля</li>
                  </ul>
                </section>
              )}

              {activeSection === 'how-it-works' && (
                <section className='mb-8'>
                  <h2 className='text-2xl font-semibold text-neutral-700 mb-4'>
                    Как работает Горизонт
                  </h2>
                  <ol className='list-decimal list-inside space-y-4 text-neutral-600'>
                    <li>
                      Регистрация пользователей. Пользователи регистрируются на вашей платформе,
                      используя свой адрес электронной почты и мастер-пароль.
                    </li>
                    <li>
                      Динамическая генерация пароля: когда пользователь пытается войти в систему,
                      ваша система запрашивает динамический пароль у Горизонта.
                    </li>
                    <li>
                      Уведомление пользователя: динамический пароль отправляется на
                      зарегистрированный адрес электронной почты пользователя. или мобильное
                      устройство.
                    </li>
                    <li>
                      Аутентификация: пользователь вводит динамический пароль, который действителен
                      в течение короткий период
                    </li>
                    <li>
                      Проверка: ваша система проверяет динамический пароль с помощью DynamicAuth.
                    </li>
                    <li>
                      Доступ предоставлен: если пароль верен и действителен, доступ предоставляется.
                      пользователю.
                    </li>
                  </ol>
                  <div className='mt-6'>
                    <h3 className='text-xl font-semibold text-neutral-700 mb-2'>
                      Преимущества безопасности
                    </h3>
                    <ul className='list-disc list-inside space-y-2 text-neutral-600'>
                      <li>Защита от атак с повторным использованием паролей</li>
                      <li>Снижение рисков от украденных баз паролей</li>
                      <li>Устранение слабых, легко угадываемых паролей</li>
                      <li>
                        Дополнительный уровень безопасности за счет паролей, ограниченных по
                        времени.
                      </li>
                    </ul>
                  </div>
                </section>
              )}

              {activeSection === 'api-reference' && (
                <section className='mb-8'>
                  <h2 className='text-2xl font-semibold text-neutral-700 mb-4'>
                    Использование API
                  </h2>
                  <p className='text-neutral-600 mb-4'>
                    Наш RESTful API позволяет легко интегрировать Горизонт в ваше приложение. Вот
                    основные роуты:
                  </p>
                  <div className='space-y-4'>
                    {[
                      {
                        name: 'Generate Password',
                        endpoint: 'POST /api/generate',
                        description: 'Generates a new dynamic password for a given user.',
                        params: '{"user_id": "string"}'
                      },
                      {
                        name: 'Verify Password',
                        endpoint: 'POST /api/verify',
                        description: 'Verifies a dynamic password for a given user.',
                        params: '{"user_id": "string", "password": "string"}'
                      },
                      {
                        name: 'Register User',
                        endpoint: 'POST /api/register',
                        description: 'Registers a new user in the DynamicAuth system.',
                        params: '{"user_id": "string", "email": "string"}'
                      }
                    ].map((api) => (
                      <div key={api.name} className='border border-neutral-200 rounded-md'>
                        <button
                          className='flex justify-between items-center w-full px-4 py-2 text-left text-neutral-700 hover:bg-neutral-100'
                          onClick={() => toggleSection(api.name)}
                        >
                          <span>{api.name}</span>
                          {isExpanded(api.name) ? (
                            <ChevronDown className='h-5 w-5' />
                          ) : (
                            <ChevronRight className='h-5 w-5' />
                          )}
                        </button>
                        {isExpanded(api.name) && (
                          <div className='px-4 py-2 bg-neutral-50'>
                            <p className='text-neutral-600 mb-2'>Endpoint: {api.endpoint}</p>
                            <p className='text-neutral-600 mb-2'>{api.description}</p>
                            <p className='text-neutral-600 mb-2'>Parameters:</p>
                            <pre className='bg-neutral-800 text-neutral-100 p-4 rounded-md overflow-x-auto mb-4'>
                              <code>{api.params}</code>
                            </pre>
                            <p className='text-neutral-600 mb-2'>Example Request:</p>
                            <pre className='bg-neutral-800 text-neutral-100 p-4 rounded-md overflow-x-auto'>
                              <code>{`curl -X POST https://api.dynamicauth.com${api.endpoint.split(' ')[1]} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '${api.params}'`}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeSection === 'api-key' && (
                <section className='mb-8'>
                  <h2 className='text-2xl font-semibold text-neutral-700 mb-4'>
                    Получение и использование вашего ключа API
                  </h2>
                  <div className='space-y-4 text-neutral-600'>
                    <p>
                      Чтобы использовать Горизонт, вам необходимо получить ключ API. Выполните
                      следующие действия:
                    </p>
                    <ol className='list-decimal list-inside space-y-2'>
                      <li>
                        Зарегистрируйте учетную запись DynamicAuth на нашем{' '}
                        <a href='#' className='text-blue-600 hover:underline'>
                          портале для разработчиков
                        </a>
                        .
                      </li>
                      <li>После входа в систему перейдите в раздел «Ключи API».</li>
                      <li>Нажмите «Создать новый ключ API» и укажите имя для вашего ключа.</li>
                      <li>Скопируйте новый ключ API и надежно сохраните его.</li>
                    </ol>
                    <p className='mt-4'>Чтобы использовать ключ API в запросах:</p>
                    <pre className='bg-neutral-800 text-neutral-100 p-4 rounded-md overflow-x-auto'>
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </pre>
                    <p className='mt-4'>
                      Замените YOUR_API_KEY своим фактическим ключом API во всех запросах к нашему
                      API.
                    </p>
                    <div className='mt-6 p-4 bg-yellow-100 rounded-md'>
                      <h3 className='text-lg font-semibold text-yellow-800 mb-2'>
                        Примечание по безопасности
                      </h3>
                      <p className='text-yellow-800'>
                        Никогда не делитесь своим ключом API публично и не включайте его в
                        клиентский код. Всегда совершать вызовы API с вашего сервера, чтобы защитить
                        ваш ключ.
                      </p>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};
