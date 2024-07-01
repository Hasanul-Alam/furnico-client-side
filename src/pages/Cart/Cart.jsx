const Cart = () => {
    const cartItems = [
        { id: 1, name: "Product 1", price: 29.99, quantity: 1, image: 'https://i.ibb.co/NCzfTNc/product-2.png' },
        { id: 2, name: "Product 2", price: 49.99, quantity: 2, image: 'https://i.ibb.co/NCzfTNc/product-2.png' },
      ];
    
      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row shadow-lg bg-white rounded-lg overflow-hidden">
            <div className="w-full lg:w-3/4 p-6">
              <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    <div>
                        <img src={item.image} alt="Chair" width={50} height={50}/>
                    </div>
                    <div>
                      <h3 className="text-lg">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center">
                      
                      <span className="ml-4">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/4 bg-gray-50 p-6">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 font-bold">
                <span>Total</span>
                <span>${(total * 1.1).toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="bg-white text-black">
    //     <div className="w-8/12 mx-auto max-md:w-11/12 text-black">
    //         <h2>This is cart page.</h2>
    //     </div>
    // </div>
  );
};

export default Cart;
