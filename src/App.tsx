import { productsList } from '@/data/products';

function App() {
  console.log('Products List:', productsList);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Bundle Builder Check</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productsList.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-2" />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;