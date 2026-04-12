// Tipos TypeScript para o e-commerce

// Interface que define a estrutura de um produto
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  emoji?: string;
  placeholderBg?: string;
  isNew?: boolean;
  imagePosition?: string;
}

// Interface para itens no carrinho (produto + quantidade)
export interface CartItem {
  product: Product;
  quantity: number;
}
