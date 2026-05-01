import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Phone,
  Send,
  MapPin,
  Sparkles,
  ShieldCheck,
  Clock,
  Star,
  Scissors,
  Camera,
  MessageCircle,
  ListChecks,
  CheckCircle2,
  Gift,
  HelpCircle,
  X,
  ChevronUp,
} from 'lucide-react';
import './styles.css';

const PHONE = '+79641284146';
const PHONE_TEXT = '+7 964 128-41-46';
const TELEGRAM = 'https://t.me/nke_studio';

const manicure = [
  ['Гигиенический маникюр без покрытия', '1100 ₽'],
  ['Укрепление ногтевой пластины с покрытием', '1500 ₽'],
  ['Коррекция ногтей', '1500 ₽'],
  ['Моделирование / наращивание', '1800 ₽'],
  ['Мужской маникюр', '1200 ₽'],
  ['Японский маникюр', '1300 ₽'],
];

const pedicure = [
  ['Гигиенический педикюр без покрытия', '1400 ₽'],
  ['Педикюр с покрытием', '2000 ₽'],
  ['Обработка пальчиков + покрытие', '1400 ₽'],
  ['Обработка стопы дисками', '700 ₽'],
  ['Мужской педикюр', '1400 ₽'],
];

const works = [
  '/works/work-1.jpg',
  '/works/work-2.jpg',
  '/works/work-3.jpg',
  '/works/work-4.jpg',
  '/works/work-5.jpg',
  '/works/work-6.jpg',
  '/works/work-7.jpg',
  '/works/work-8.jpg',
  '/works/work-9.jpg',
];

const bookingSteps = [
  'Напишите или позвоните.',
  'Укажите услугу и удобный день.',
  'Наталья предложит свободное время.',
  'Приходите по адресу: Ленина 8.',
];

const messageTemplate = [
  'какая услуга нужна;',
  'удобный день;',
  'утро / день / вечер;',
  'нужно ли покрытие;',
  'если есть пожелания по дизайну, можно отправить фото.',
];

const reasons = [
  'аккуратная обработка',
  'носибельное покрытие',
  'спокойная атмосфера',
  'индивидуальный подход',
  'можно показать желаемый дизайн',
  'прием без ожидания, по записи',
];

const reviews = [
  'Очень аккуратная работа, покрытие хорошо носится.',
  'Уютный кабинет, приятная атмосфера.',
  'Спасибо за красивый маникюр!',
];

const faq = [
  ['Сколько длится процедура?', 'В среднем около 1,5 часов, зависит от услуги и дизайна.'],
  ['Нужна ли предоплата?', 'Сейчас предоплата не требуется.'],
  ['Можно ли прийти без записи?', 'Нет, прием только по предварительной записи.'],
  ['Где находится кабинет?', 'Усть-Илимск, Ленина 8.'],
  ['Можно ли отправить пример дизайна?', 'Да, можно отправить фото желаемого дизайна при записи.'],
];

const heroFeatures = [
  'Стерильные инструменты и одноразовые расходники',
  'Запись без ожидания, только по времени',
  'Подбор формы и покрытия под образ и ритм жизни',
];

function App() {
  const [activeWork, setActiveWork] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveWork(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <main>
      <a className="skipLink" href="#top">Перейти к контенту</a>
      <Header />
      <Hero />
      <Benefits />
      <Booking />
      <Prices />
      <Promo />
      <Reasons />
      <Safety />
      <Portfolio setActiveWork={setActiveWork} />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
      <MobileSticky />
      <ScrollToTop />
      <Lightbox activeWork={activeWork} onClose={() => setActiveWork(null)} />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <a href="#top" className="logo">НК-Э</a>
      <nav>
        <a href="#prices">Прайс</a>
        <a href="#works">Работы</a>
        <a href="#faq">FAQ</a>
        <a href="#booking">Запись</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroText">
        <div className="badge"><Sparkles size={16} /> Усть-Илимск · прием по записи</div>
        <h1>Маникюр и педикюр от НК-Э</h1>
        <p className="lead">
          Наталья — мастер маникюра и педикюра со стажем 4 года. Аккуратный маникюр, педикюр,
          укрепление и моделирование ногтей в уютном оборудованном кабинете на Ленина 8.
        </p>
        <div className="actions">
          <a className="button primary" href={`tel:${PHONE}`}><Phone size={20} /> Позвонить</a>
          <a className="button secondary" href={TELEGRAM} target="_blank" rel="noreferrer"><Send size={20} /> Написать в Telegram</a>
        </div>
        <p className="hint">Напишите услугу и удобный день — Наталья предложит ближайшие свободные окошки.</p>
        <p className="hint subtle">Также можно записаться через Max — ссылку добавим позже.</p>
      </div>
      <div className="heroVisual">
        <div className="heroGlow" aria-hidden="true" />
        <div className="heroPanel">
          <h3>Удобный первый визит</h3>
          <ul>
            {heroFeatures.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="heroMiniCards">
            <article>
              <span>Маникюр</span>
              <strong>от 1100 ₽</strong>
            </article>
            <article>
              <span>Педикюр</span>
              <strong>от 1400 ₽</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    [ShieldCheck, 'Чистота и безопасность', 'Инструменты проходят обработку, в работе используются одноразовые расходники.'],
    [Clock, 'Без ожидания', 'Прием только по предварительной записи.'],
    [Star, 'Опыт 4 года', 'Аккуратная работа и внимательное отношение к клиенту.'],
  ];

  return (
    <section className="benefits">
      {items.map(([Icon, title, text]) => (
        <div className="benefit" key={title}>
          <Icon size={28} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
}

function Booking() {
  return (
    <section className="section booking" id="booking">
      <div className="sectionTitle">
        <span>Запись</span>
        <h2>Как записаться</h2>
        <p>Запись проходит лично: Наталья уточняет услугу, удобное время и подтверждает визит.</p>
      </div>
      <div className="bookingGrid">
        <div className="infoCard">
          <div className="cardIcon"><ListChecks size={24} /></div>
          <ol className="steps">
            {bookingSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="infoCard accentCard">
          <div className="cardIcon"><MessageCircle size={24} /></div>
          <h3>Что написать при записи</h3>
          <p>Для записи напишите:</p>
          <ul className="checkList">
            {messageTemplate.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="button primary" href={TELEGRAM} target="_blank" rel="noreferrer"><Send size={20} /> Написать в Telegram</a>
        </div>
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section className="section" id="prices">
      <div className="sectionTitle">
        <span>Прайс</span>
        <h2>Услуги и цены</h2>
        <p>Точная длительность зависит от состояния ногтей и выбранной услуги. В среднем визит занимает около 1,5 часов.</p>
      </div>
      <div className="priceGrid">
        <PriceCard title="Маникюр" items={manicure} />
        <PriceCard title="Педикюр" items={pedicure} />
      </div>
    </section>
  );
}

function PriceCard({ title, items }) {
  return (
    <div className="priceCard">
      <h3>{title}</h3>
      {items.map(([name, price]) => (
        <div className="priceRow" key={name}>
          <span>{name}</span>
          <strong>{price}</strong>
        </div>
      ))}
    </div>
  );
}

function Promo() {
  return (
    <section className="promo">
      <div>
        <span>Для новых клиентов</span>
        <h2>Для первого визита — дизайн одного ногтя в подарок</h2>
        <p>Акция действует при записи через сайт.</p>
      </div>
      <div className="promoBox">
        <Gift size={30} />
        <h3>Бонус к первому визиту</h3>
        <p>Напишите в Telegram или позвоните и скажите, что пришли с сайта.</p>
        <div className="actions compact">
          <a className="button light" href={TELEGRAM} target="_blank" rel="noreferrer"><Send size={20} /> Telegram</a>
          <a className="button outline" href={`tel:${PHONE}`}><Phone size={20} /> Позвонить</a>
        </div>
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section className="section">
      <div className="sectionTitle">
        <span>Доверие</span>
        <h2>Почему клиенты возвращаются</h2>
        <p>Важны не только красивые ногти, но и спокойный визит, понятная запись и аккуратность в деталях.</p>
      </div>
      <div className="reasonGrid">
        {reasons.map((reason) => (
          <div className="reasonItem" key={reason}>
            <CheckCircle2 size={22} />
            <span>{reason}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section className="safety">
      <div className="safetyTitle">
        <ShieldCheck size={34} />
        <div>
          <span>Чистота и безопасность</span>
          <h2>Рабочее место готовится к каждому визиту</h2>
        </div>
      </div>
      <p>
        Инструменты проходят обработку перед каждым клиентом. В работе используются одноразовые
        расходники там, где это необходимо: пилки, бафы, салфетки и другие материалы.
      </p>
      <p>Рабочее место подготавливается к каждому визиту.</p>
    </section>
  );
}

function Portfolio({ setActiveWork }) {
  return (
    <section className="section" id="works">
      <div className="sectionTitle">
        <span>Портфолио</span>
        <h2>Работы мастера</h2>
        <p>Примеры маникюра, покрытия, френча, дизайна и моделирования.</p>
      </div>
      <div className="gallery">
        {works.map((src, index) => (
          <button
            type="button"
            className="galleryButton"
            key={src}
            onClick={() => setActiveWork({ src, index: index + 1 })}
            aria-label={`Открыть фото работы ${index + 1}`}
          >
            <img src={src} alt={`Работа мастера НК-Э ${index + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section reviews">
      <div className="sectionTitle">
        <span>Отзывы</span>
        <h2>Отзывы клиентов</h2>
        <p>Короткие впечатления после визита.</p>
      </div>
      <div className="reviewGrid">
        {reviews.map((review) => (
          <blockquote className="reviewCard" key={review}>
            <Star size={20} />
            <p>“{review}”</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="sectionTitle">
        <span>FAQ</span>
        <h2>Частые вопросы</h2>
        <p>Короткие ответы для тех, кто записывается впервые.</p>
      </div>
      <div className="faqList">
        {faq.map(([question, answer]) => (
          <details className="faqItem" key={question}>
            <summary>
              <HelpCircle size={22} />
              <h3>{question}</h3>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <MapPin size={34} />
        <h2>Адрес и запись</h2>
        <p>Усть-Илимск, Ленина 8. Прием только по предварительной записи. Точное время визита Наталья подтверждает лично.</p>
        <p className="phoneText">Телефон: {PHONE_TEXT}</p>
      </div>
      <div className="contactButtons">
        <a className="button primary" href={`tel:${PHONE}`}><Phone size={20} /> Позвонить</a>
        <a className="button secondary" href={TELEGRAM} target="_blank" rel="noreferrer"><Send size={20} /> Написать в Telegram</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div><Scissors size={16} /> Маникюр и педикюр от НК-Э · Усть-Илимск</div>
      <div><Camera size={16} /> Работы Натальи</div>
    </footer>
  );
}

function MobileSticky() {
  return (
    <a className="mobileSticky" href={TELEGRAM} target="_blank" rel="noreferrer">
      <Send size={20} />
      Записаться
    </a>
  );
}

function Lightbox({ activeWork, onClose }) {
  if (!activeWork) return null;

  return (
    <div className="lightbox" onClick={onClose} role="presentation">
      <div className="lightboxInner" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={`Просмотр работы ${activeWork.index}`}>
        <button type="button" className="lightboxClose" onClick={onClose} aria-label="Закрыть просмотр">
          <X size={20} />
        </button>
        <img src={activeWork.src} alt={`Работа мастера НК-Э ${activeWork.index}`} />
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 650);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      className="scrollTop"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Наверх"
    >
      <ChevronUp size={20} />
    </button>
  );
}

createRoot(document.getElementById('root')).render(<App />);
