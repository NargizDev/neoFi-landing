# Архитектура проекта neoFi-landing

## Общие принципы
- Проект построен по принципам feature-sliced design (FSD) с разделением на слои: app, entities, features, shared, widgets, pages, processes и т.д.
- Используется TypeScript, React, Vite, TailwindCSS.
- Все бизнес-логика и UI-компоненты разделены по смысловым блокам для масштабируемости и переиспользования.

## Основные директории

- **app/** — глобальные провайдеры (контексты, темы, QueryProvider) и роутинг приложения.
- **entities/** — бизнес-сущности: минимальные, переиспользуемые компоненты и их данные (например, Blockchain, FAQ, Feature, Testimonial).
- **features/** — отдельные фичи, реализующие конкретную пользовательскую задачу (например, переключение FAQ, форма подписки).
- **layouts/** — макеты страниц (Header, Footer, MainLayout), отвечающие за общую структуру.
- **pages/** — страницы приложения (например, HomePage), каждая страница собирает виджеты, фичи и сущности.
- **processes/** — сложные пользовательские сценарии, объединяющие несколько фич и сущностей (например, subscribe-flow).
- **services/** — сервисы для работы с внешними API и другими источниками данных.
- **shared/** — общие компоненты, ассеты, утилиты, хуки, конфиги, которые могут использоваться в любом месте проекта.
- **types/** — глобальные типы TypeScript.
- **widgets/** — крупные секции/виджеты, собирающие сущности и фичи для отображения на страницах (например, HeroSection, FAQSection, FeatureSection и т.д.).

## Пример структуры страницы

```
HomePage (pages/home/HomePage.tsx)
│
├── HeroSection (widgets/hero-section/ui/HeroSection.tsx)
├── FeatureSection (widgets/feature-section/ui/FeatureSection.tsx)
├── BlockchainSection (widgets/blockchain-section/ui/BlockchainSection.tsx)
├── FAQSection (widgets/faq-section/ui/FAQSection.tsx)
├── TestimonialSection (widgets/testimonial-section/ui/TestimonialSection.tsx)
├── CTASection (widgets/cta-section/ui/CTASection.tsx)
└── Footer, Header (layouts/)
```

## Принципы разработки
- Каждый слой зависит только от нижележащих (shared → entities → features → widgets → pages).
- Переиспользуемые компоненты и данные выносятся в shared и entities.
- Фичи не должны знать о страницах, только о сущностях и shared.
- Виджеты собирают фичи и сущности для формирования секций страниц.
- Страницы собирают виджеты и макеты.

## Стили
- TailwindCSS для utility-first стилей.
- Глобальные стили — в App.css и index.css.

## Провайдеры
- Все глобальные провайдеры (темы, QueryProvider и др.) подключаются в app/providers.

## Требования к компонентам
- Компоненты должны быть независимыми и легко тестируемыми.
- Код компонентов должен быть читаемым и поддерживаемым.
- Для импортов используйте краткие alias-пути (например, `@/shared/ui/Button`, `@/widgets/hero-section`), чтобы избежать длинных относительных путей и повысить удобство навигации по проекту.

---

Если требуется более подробное описание какого-либо слоя или примеры кода — обратитесь к соответствующим директориям или уточните вопрос. 