import React from 'react';

// Challenge 1: Basic User Profile Card
const UserProfileCard = ({ name, email, avatarUrl }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
            <img
                src={avatarUrl}
                alt={`${name}'s avatar`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center mb-2">{name}</h2>
            <p className="text-gray-600 text-center">{email}</p>
        </div>
    );
};

// Challenge 2: Product Listing Item
const ProductListingItem = ({ product }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-xl font-bold text-blue-600 mb-2">${product.price.toFixed(2)}</p>
            <p className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
        </div>
    );
};

// Challenge 3: Dynamic Button
const DynamicButton = ({ label, isDisabled = false, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
                isDisabled
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
        >
            {label}
        </button>
    );
};

// Challenge 4: List of Features
const FeaturesList = ({ features }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Challenge 5: Alert Message Box
const AlertBox = ({ message, type }) => {
    const getAlertStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-green-100 border-green-500 text-green-700';
            case 'warning':
                return 'bg-yellow-100 border-yellow-500 text-yellow-700';
            case 'error':
                return 'bg-red-100 border-red-500 text-red-700';
            default:
                return 'bg-gray-100 border-gray-500 text-gray-700';
        }
    };

    return (
        <div className={`p-4 rounded-md border-l-4 ${getAlertStyles()}`}>
            <p className="font-medium">{message}</p>
        </div>
    );
};

// Challenge 6: Simple Progress Bar
const ProgressBar = ({ percentage }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-6 relative">
            <div
                className="bg-blue-500 h-6 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
            ></div>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-700">
        {percentage}%
      </span>
        </div>
    );
};

// Challenge 7: User List with Active Status
const UserListWithStatus = ({ users }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="space-y-3">
                {users.map((user) => (
                    <li key={user.id} className="flex items-center justify-between">
                        <span className="font-medium">{user.name}</span>
                        <div className="flex items-center">
              <span
                  className={`w-3 h-3 rounded-full mr-2 ${
                      user.isOnline ? 'bg-green-500' : 'bg-gray-400'
                  }`}
              ></span>
                            <span className={`text-sm ${
                                user.isOnline ? 'text-green-600' : 'text-gray-500'
                            }`}>
                {user.isOnline ? 'Online' : 'Offline'}
              </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Challenge 8: Recipe Card
const RecipeCard = ({ recipe }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{recipe.name}</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Ingredients:</h3>
                <ul className="list-disc list-inside space-y-1">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-600">{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Instructions:</h3>
                <p className="text-gray-600 leading-relaxed">{recipe.instructions}</p>
            </div>
        </div>
    );
};

// Challenge 9: Dynamic Content Section
const ContentSection = ({ title, children }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">{title}</h2>
            <div className="space-y-3">
                {children}
            </div>
        </div>
    );
};

// Challenge 10: Filterable Item List
const FilterableList = ({ items, filterCategory }) => {
    const filteredItems = filterCategory
        ? items.filter(item => item.category === filterCategory)
        : items;

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">
                {filterCategory ? `${filterCategory} Items` : 'All Items'}
            </h3>
            <ul className="space-y-2">
                {filteredItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
              {item.category}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Main App Component with all examples
const App = () => {
    // Sample data
    const userData = {
        name: "Alice Wonderland",
        email: "alice@example.com",
        avatarUrl: "https://placehold.co/100x100/A020F0/ffffff?text=AW"
    };

    const productData = {
        id: 1,
        name: "Wireless Mouse",
        price: 25.99,
        inStock: true
    };

    const appFeatures = [
        "Real-time updates",
        "User authentication",
        "Data export",
        "Customizable themes"
    ];

    const usersData = [
        { id: 1, name: "Charlie", isOnline: true },
        { id: 2, name: "Diana", isOnline: false },
        { id: 3, name: "Eve", isOnline: true }
    ];

    const pizzaRecipe = {
        name: "Homemade Pizza",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella cheese",
            "Pepperoni",
            "Oregano"
        ],
        instructions: "Roll out dough. Spread sauce. Add cheese and toppings. Bake at 450°F for 12-15 minutes."
    };

    const inventoryItems = [
        { id: 1, name: "Laptop", category: "Electronics" },
        { id: 2, name: "Desk Chair", category: "Furniture" },
        { id: 3, name: "Monitor", category: "Electronics" },
        { id: 4, name: "Bookshelf", category: "Furniture" }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    React Practice Challenges
                </h1>

                <div className="space-y-12">
                    {/* Challenge 1 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 1: User Profile Card</h2>
                        <UserProfileCard {...userData} />
                    </section>

                    {/* Challenge 2 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 2: Product Listing Item</h2>
                        <ProductListingItem product={productData} />
                    </section>

                    {/* Challenge 3 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 3: Dynamic Button</h2>
                        <div className="space-x-4">
                            <DynamicButton
                                label="Submit Form"
                                onClick={() => alert('Form Submitted!')}
                            />
                            <DynamicButton
                                label="Disabled Button"
                                isDisabled={true}
                            />
                        </div>
                    </section>

                    {/* Challenge 4 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 4: List of Features</h2>
                        <FeaturesList features={appFeatures} />
                    </section>

                    {/* Challenge 5 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 5: Alert Message Box</h2>
                        <div className="space-y-4">
                            <AlertBox message="Operation successful!" type="success" />
                            <AlertBox message="Please check your input." type="warning" />
                            <AlertBox message="Something went wrong." type="error" />
                        </div>
                    </section>

                    {/* Challenge 6 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 6: Simple Progress Bar</h2>
                        <div className="space-y-4">
                            <ProgressBar percentage={75} />
                            <ProgressBar percentage={20} />
                            <ProgressBar percentage={90} />
                        </div>
                    </section>

                    {/* Challenge 7 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 7: User List with Active Status</h2>
                        <UserListWithStatus users={usersData} />
                    </section>

                    {/* Challenge 8 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 8: Recipe Card</h2>
                        <RecipeCard recipe={pizzaRecipe} />
                    </section>

                    {/* Challenge 9 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 9: Dynamic Content Section</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ContentSection title="About Us">
                                <p className="text-gray-600">We are a company dedicated to creating amazing user experiences through innovative technology solutions.</p>
                                <img src="https://placehold.co/150x100/4F46E5/ffffff?text=About" alt="About Us" className="rounded-md" />
                            </ContentSection>

                            <ContentSection title="Contact Info">
                                <ul className="list-disc list-inside space-y-1 text-gray-600">
                                    <li>Email: info@example.com</li>
                                    <li>Phone: 123-456-7890</li>
                                    <li>Address: 123 Main St, City, State</li>
                                </ul>
                            </ContentSection>
                        </div>
                    </section>

                    {/* Challenge 10 */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Challenge 10: Filterable Item List</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FilterableList items={inventoryItems} />
                            <FilterableList items={inventoryItems} filterCategory="Electronics" />
                            <FilterableList items={inventoryItems} filterCategory="Furniture" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default App;