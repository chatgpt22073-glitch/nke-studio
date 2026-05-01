# NKE Studio Landing

Мини-сайт для мастера маникюра и педикюра «НК-Э».

## Как запустить локально

```bash
npm install
npm run dev
```

После запуска Vite покажет ссылку, обычно `http://localhost:5173`.

## Как заменить фото

Фотографии лежат в папке:

```text
public/works/
```

Можно заменить файлы `work-1.jpg`, `work-2.jpg` и т.д. на свои, сохранив такие же названия.

## Что поменять перед публикацией

Основные данные находятся в `src/main.jsx`:

```js
const PHONE = '+79641284146';
const PHONE_TEXT = '+7 964 128-41-46';
const TELEGRAM = 'https://t.me/nke_studio';
```

Если появится ссылка на Max, можно добавить отдельную кнопку рядом с Telegram.

## Публикация на Vercel

1. Создай репозиторий на GitHub.
2. Загрузи туда содержимое этой папки.
3. Зайди на Vercel.
4. Нажми Add New Project.
5. Выбери GitHub-репозиторий.
6. Framework Preset: Vite.
7. Build Command: `npm run build`.
8. Output Directory: `dist`.
9. Нажми Deploy.
