export interface Product {
  id: string
  title: string
  description: string
  price: number
  quantity: number
  image: string
  category: string
}

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro',
    description: 'El último iPhone con chip A17 Pro y cámara de 48MP',
    price: 999999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Electrónicos'
  },
  {
    id: '2',
    title: 'MacBook Air M2',
    description: 'Potente, ligero y con batería de larga duración',
    price: 1299999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Computadoras'
  },
  {
    id: '3',
    title: 'AirPods Pro',
    description: 'Auriculares inalámbricos con cancelación activa de ruido',
    price: 299999,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1588156979435-1c5c0c0c0c0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Accesorios'
  }
] 