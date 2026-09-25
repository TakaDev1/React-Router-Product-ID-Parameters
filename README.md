# React Router Product ID Parameters

React Routerの`useParams`を使用して、URLに含まれる商品IDを取得する練習アプリです。

## 目次

* [概要](#概要)
* [課題](#課題)
* [条件](#条件)
* [完成イメージ](#完成イメージ)
* [使用技術](#使用技術)
* [プロジェクト構成](#プロジェクト構成)
* [実装内容](#実装内容)
* [動作確認](#動作確認)
* [学習ポイント](#学習ポイント)

## 概要

`/products/:id`という動的なURLを作成し、`useParams`を使ってURLに含まれる商品IDを取得します。

取得した商品IDを画面に表示することで、React RouterのURLパラメータの基本的な使い方を学習します。

## 課題

`useParams`を使って、商品IDを取得して表示してください。

## 条件

以下の条件を満たしてください。

* `/products/:id`のRouteを作成する
* `ProductDetail`コンポーネントを作成する
* `useParams`を使用する
* URLから`id`を取得する
* `Product ID: ○○`と表示する

## 完成イメージ

以下のURLにアクセスします。

```text
/products/10
```

画面に以下のように表示されれば完成です。

```text
Product ID: 10
```

別のIDを指定した場合も、URLの値が表示されます。

```text
/products/25
```

```text
Product ID: 25
```

## 使用技術

* React
* TypeScript
* React Router
* Vite

## プロジェクト構成

```text
src/
├── data/
│   └── ProductData.ts
├── pages/
│   └── ProductDetail.tsx
├── types/
│   └── ProductType.ts
├── App.tsx
└── main.tsx
```

### `data/ProductData.ts`

商品データを管理します。

```ts
import type { ProductType } from "../types/ProductType";

const ProductsData: ProductType[] = [
  {
    id: 1,
    title: "PC",
    price: 130000,
  },
  {
    id: 2,
    title: "Tablet",
    price: 52000,
  },
  {
    id: 3,
    title: "SmartPhone",
    price: 40000,
  },
];

export default ProductsData;
```

### `types/ProductType.ts`

商品データの型を定義します。

```ts
export type ProductType = {
  id: number;
  title: string;
  price: number;
};
```

### `pages/ProductDetail.tsx`

`useParams`を使用してURLの`id`を取得します。

```tsx
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams<"id">();

  return <h1>Product ID: {id}</h1>;
};

export default ProductDetail;
```

### `App.tsx`

`/products/:id`のRouteを定義します。

```tsx
import { BrowserRouter, Route, Routes } from "react-router";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 動作確認

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで以下のURLにアクセスします。

```text
http://localhost:5173/products/10
```

以下のように表示されれば成功です。

```text
Product ID: 10
```

さらに別のIDでも確認します。

```text
http://localhost:5173/products/100
```

```text
Product ID: 100
```

## 学習ポイント

### URLパラメータを定義する

```tsx
<Route path="/products/:id" element={<ProductDetail />} />
```

`:id`がURLパラメータです。

例えば、

```text
/products/10
/products/20
/products/30
```

のようにURLの値を変更できます。

### `useParams`で取得する

```tsx
const { id } = useParams<"id">();
```

`/products/10`にアクセスした場合、`id`には`"10"`が入ります。

```text
URL
/products/10
    ↓
useParams()
    ↓
id = "10"
    ↓
Product ID: 10
```

### `id`は文字列として取得される

`useParams`で取得したURLパラメータは文字列です。

```tsx
const { id } = useParams<"id">();
```

そのため、商品データの`id`と比較する場合など、数値として扱いたいときは変換が必要です。

```tsx
Number(id)
```

この課題ではURLパラメータの取得と表示に焦点を当て、商品データとの検索処理は次の課題で扱います。
