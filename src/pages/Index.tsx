import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'SmartWatch Pro X',
      price: 24990,
      oldPrice: 34990,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Наушники AirSound Max',
      price: 12990,
      oldPrice: 18990,
      rating: 4.9,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Портативная колонка Bass+',
      price: 8990,
      oldPrice: 12990,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      badge: 'Скидка -30%'
    },
    {
      id: 4,
      name: 'Камера Action 4K',
      price: 19990,
      oldPrice: null,
      rating: 5.0,
      reviews: 43,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
      badge: 'Топ'
    }
  ];

  const features = [
    { icon: 'Truck', title: 'Быстрая доставка', desc: 'По всей России за 1-3 дня' },
    { icon: 'Shield', title: 'Гарантия качества', desc: 'Официальная гарантия 2 года' },
    { icon: 'CreditCard', title: 'Безопасная оплата', desc: 'Оплата при получении' },
    { icon: 'HeadphonesIcon', title: 'Поддержка 24/7', desc: 'Всегда на связи для вас' }
  ];

  const specs = {
    display: '6.7" AMOLED 120Hz',
    processor: 'Snapdragon 8 Gen 2',
    memory: '12 GB RAM / 256 GB',
    camera: '50MP + 12MP + 8MP',
    battery: '5000 mAh',
    charging: '65W быстрая зарядка',
    os: 'Android 14',
    weight: '195 г'
  };

  const reviews = [
    {
      id: 1,
      name: 'Алексей М.',
      rating: 5,
      date: '15 сентября 2024',
      text: 'Отличное качество звука! Батарея держит целый день. Очень доволен покупкой.',
      verified: true
    },
    {
      id: 2,
      name: 'Мария К.',
      rating: 5,
      date: '10 сентября 2024',
      text: 'Удобные, стильные, звук превосходный. Рекомендую всем!',
      verified: true
    },
    {
      id: 3,
      name: 'Дмитрий В.',
      rating: 4,
      date: '5 сентября 2024',
      text: 'Хорошие наушники за свою цену. Единственный минус - чехол немного громоздкий.',
      verified: true
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink via-blue to-orange bg-clip-text text-transparent">
                ElectroShop
              </h1>
              <div className="hidden md:flex gap-6">
                {['home', 'catalog', 'product', 'specs', 'reviews'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-colors hover:text-pink ${
                      activeSection === section ? 'text-pink' : 'text-gray-600'
                    }`}
                  >
                    {section === 'home' && 'Главная'}
                    {section === 'catalog' && 'Каталог'}
                    {section === 'product' && 'О товаре'}
                    {section === 'specs' && 'Характеристики'}
                    {section === 'reviews' && 'Отзывы'}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
              <Button className="bg-pink hover:bg-pink/90">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-pink/10 via-blue/10 to-orange/10 py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-orange rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-pink text-white">🔥 Скидки до 50%</Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Инновации в мире
                <span className="block bg-gradient-to-r from-pink via-blue to-orange bg-clip-text text-transparent">
                  электроники
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Откройте для себя новейшие технологии. Умные устройства, которые меняют жизнь к лучшему.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink to-blue hover:opacity-90 text-white">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-pink text-pink hover:bg-pink hover:text-white">
                  <Icon name="Play" size={20} className="mr-2" />
                  Видео обзор
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img
                src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=600&fit=crop"
                alt="Hero Product"
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-pink to-orange p-3 rounded-xl">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Продано сегодня</p>
                    <p className="text-2xl font-bold text-pink">127+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in border-2 hover:border-pink"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="bg-gradient-to-br from-pink/10 to-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={28} className="text-pink" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue text-white">Популярное</Badge>
            <h2 className="text-4xl font-bold mb-4">Хиты продаж</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые популярные товары с лучшими отзывами и гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-orange text-white">
                    {product.badge}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Button className="w-full bg-white text-pink hover:bg-pink hover:text-white">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={i < Math.floor(product.rating) ? 'text-yellow fill-yellow' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">{product.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-pink">{product.price.toLocaleString()} ₽</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.oldPrice.toLocaleString()} ₽</span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="py-20 bg-gradient-to-br from-blue/5 to-pink/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-pink to-orange text-white">Премиум качество</Badge>
              <h2 className="text-4xl font-bold">Наушники AirSound Max</h2>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow fill-yellow" />
                  ))}
                </div>
                <span className="text-gray-600">(256 отзывов)</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Беспроводные наушники премиум-класса с активным шумоподавлением. 
                Погрузитесь в мир чистого звука высочайшего качества. 
                Эргономичный дизайн и до 30 часов автономной работы.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-pink/10 p-2 rounded-lg">
                    <Icon name="Headphones" size={20} className="text-pink" />
                  </div>
                  <div>
                    <p className="font-semibold">Активное шумоподавление</p>
                    <p className="text-sm text-gray-600">Полное погружение в музыку</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue/10 p-2 rounded-lg">
                    <Icon name="Battery" size={20} className="text-blue" />
                  </div>
                  <div>
                    <p className="font-semibold">До 30 часов работы</p>
                    <p className="text-sm text-gray-600">Целая неделя без подзарядки</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange/10 p-2 rounded-lg">
                    <Icon name="Bluetooth" size={20} className="text-orange" />
                  </div>
                  <div>
                    <p className="font-semibold">Bluetooth 5.3</p>
                    <p className="text-sm text-gray-600">Стабильное соединение до 10 метров</p>
                  </div>
                </div>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-pink">12 990 ₽</span>
                <span className="text-xl text-gray-400 line-through">18 990 ₽</span>
                <Badge className="bg-orange text-white">-32%</Badge>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink to-blue hover:opacity-90 text-white flex-1">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Купить сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-pink text-pink hover:bg-pink hover:text-white">
                  <Icon name="Heart" size={20} />
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
                alt="Product Detail"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue text-white">Технические детали</Badge>
            <h2 className="text-4xl font-bold mb-4">Характеристики</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полная техническая информация о продукте
            </p>
          </div>

          <Tabs defaultValue="tech" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tech">Технические</TabsTrigger>
              <TabsTrigger value="package">Комплектация</TabsTrigger>
              <TabsTrigger value="warranty">Гарантия</TabsTrigger>
            </TabsList>
            <TabsContent value="tech" className="mt-8">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(specs).map(([key, value], index) => (
                    <div
                      key={key}
                      className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-50 to-transparent hover:from-pink/5 transition-colors animate-fade-in"
                      style={{animationDelay: `${0.05 * index}s`}}
                    >
                      <span className="text-gray-600 font-medium">
                        {key === 'display' && 'Дисплей'}
                        {key === 'processor' && 'Процессор'}
                        {key === 'memory' && 'Память'}
                        {key === 'camera' && 'Камера'}
                        {key === 'battery' && 'Батарея'}
                        {key === 'charging' && 'Зарядка'}
                        {key === 'os' && 'ОС'}
                        {key === 'weight' && 'Вес'}
                      </span>
                      <span className="font-semibold text-dark-blue">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="package" className="mt-8">
              <Card className="p-8">
                <ul className="space-y-4">
                  {['Наушники AirSound Max', 'Зарядный кейс', 'USB-C кабель', 'Сменные амбушюры (3 размера)', 'Руководство пользователя', 'Гарантийный талон'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                      <div className="bg-gradient-to-br from-pink to-blue p-1 rounded-full">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="warranty" className="mt-8">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink/10 p-3 rounded-xl">
                      <Icon name="Shield" size={24} className="text-pink" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Официальная гарантия 2 года</h3>
                      <p className="text-gray-600">Полное гарантийное обслуживание от производителя</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue/10 p-3 rounded-xl">
                      <Icon name="RefreshCw" size={24} className="text-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Обмен и возврат 14 дней</h3>
                      <p className="text-gray-600">Возможность обмена или возврата без объяснения причин</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange/10 p-3 rounded-xl">
                      <Icon name="Wrench" size={24} className="text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Бесплатный ремонт</h3>
                      <p className="text-gray-600">Ремонт в сертифицированных сервисных центрах</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-pink/5 to-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pink text-white">Отзывы покупателей</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={24} className="text-yellow fill-yellow" />
                ))}
              </div>
              <span className="text-xl font-semibold">4.9 из 5</span>
              <span className="text-gray-600">(256 отзывов)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="p-6 hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  {review.verified && (
                    <Badge className="bg-green-500 text-white">
                      <Icon name="CheckCircle" size={12} className="mr-1" />
                      Проверено
                    </Badge>
                  )}
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < review.rating ? 'text-yellow fill-yellow' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{review.text}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-pink text-pink hover:bg-pink hover:text-white">
              Показать все отзывы
              <Icon name="ChevronDown" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-dark-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink via-blue to-orange bg-clip-text text-transparent">
                ElectroShop
              </h3>
              <p className="text-gray-300">Инновационная электроника для современной жизни</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-pink cursor-pointer transition-colors">Доставка и оплата</li>
                <li className="hover:text-pink cursor-pointer transition-colors">Гарантия</li>
                <li className="hover:text-pink cursor-pointer transition-colors">Возврат товара</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-pink cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-pink cursor-pointer transition-colors">Контакты</li>
                <li className="hover:text-pink cursor-pointer transition-colors">Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 (800) 555-35-35
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@electroshop.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2024 ElectroShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
