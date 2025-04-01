import { mockProducts } from '@/data/mockProducts'

export default function ProductList() {
  const total = mockProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  return (
    <div className="space-y-4">
      {mockProducts.map((product) => (
        <div key={product.id} className="flex items-center space-x-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="font-medium">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-gray-600">
              Cantidad: {product.quantity}
            </p>
            <p className="text-gray-900 font-medium">
              ${(product.price * product.quantity).toLocaleString('es-AR')}
            </p>
          </div>
        </div>
      ))}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>
            ${total.toLocaleString('es-AR')}
          </span>
        </div>
      </div>
    </div>
  )
} 