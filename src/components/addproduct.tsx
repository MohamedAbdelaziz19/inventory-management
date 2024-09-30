//src/components/addproduct.tsx
'use client'
import { useState } from 'react';
import { Camera, Upload, CheckCircle } from 'lucide-react';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProductImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle product submission logic
    setIsSubmitted(true);
    // Reset form fields after submission if necessary
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductImage(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
        {isSubmitted && (
          <div className="flex items-center justify-between mb-4 p-4 bg-green-100 border border-green-300 text-green-800 rounded-md">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Product added successfully!</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="productDescription">
              Product Description
            </label>
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="productPrice">
              Product Price
            </label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="productImage">
              Product Image
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="productImage"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="productImage"
                className="flex items-center justify-center w-full p-4 border border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-400 transition duration-300"
              >
                {productImage ? (
                  <img src={productImage} alt="Product Preview" className="h-32 w-full object-cover rounded-md" />
                ) : (
                  <div className="flex flex-col items-center">
                    <Camera className="w-6 h-6 mb-2 text-gray-400" />
                    <span className="text-gray-600">Upload Image</span>
                  </div>
                )}
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
