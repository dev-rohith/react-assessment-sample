ecommerce-catalog-app/
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── types/
│   │   └── index.ts
│   ├── hooks/
│   │   └── useProductCatalog.ts
│   ├── services/
│   │   ├── ProductService.ts
│   │   └── PriceCalculator.ts
│   ├── components/
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductCard.module.css
│   │   ├── ProductForm/
│   │   │   ├── ProductForm.tsx
│   │   │   └── ProductForm.module.css
│   │   ├── SearchAndFilter/
│   │   │   ├── SearchAndFilter.tsx
│   │   │   └── SearchAndFilter.module.css
│   │   ├── ProductList/
│   │   │   ├── ProductList.tsx
│   │   │   └── ProductList.module.css
│   │   └── Pagination/
│   │       ├── Pagination.tsx
│   │       └── Pagination.module.css
│   └── utils/
│       └── constants.ts
└── tests/
    ├── ProductService.test.ts
    ├── PriceCalculator.test.ts
    ├── components/
    │   ├── ProductCard.test.tsx
    │   ├── ProductForm.test.tsx
    │   └── ProductList.test.tsx
    └── hooks/
        └── useProductCatalog.test.ts