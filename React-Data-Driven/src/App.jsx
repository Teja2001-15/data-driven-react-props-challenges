import React from 'react';
import './App.css';

import  UserProfileCard from './UserProfileCard';
import  ProductListingItem from './ProductListingItem';
import  DynamicButton  from './DynamicButton';
import  FeatureList  from './FeatureList';
import  AlertBox  from './AlertBox';
import  ProgressBar  from './ProgressBar';
import  UserListWithStatus  from './UserListWithStatus';
import  RecipeCard  from './RecipeCard';
import  ContentSection  from './ContentSection';
import  FilterableList  from './FilterableList';

const App = () => {
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
        instructions: "Roll out dough. Spread sauce. Add cheese and toppings. Bake at 450°F for 12–15 minutes."
    };

    const inventoryItems = [
        { id: 1, name: "Laptop", category: "Electronics" },
        { id: 2, name: "Desk Chair", category: "Furniture" },
        { id: 3, name: "Monitor", category: "Electronics" },
        { id: 4, name: "Bookshelf", category: "Furniture" }
    ];

    return (
        <div className="App">
            <h1>Component Showcase</h1>

            <UserProfileCard {...userData} />
            <ProductListingItem product={productData} />

            <DynamicButton label="Submit Form" onClick={() => alert('Form Submitted!')} />
            <DynamicButton label="Disabled Button" isDisabled={true} />

            <FeatureList features={appFeatures} />

            <AlertBox message="Operation successful!" type="success" />
            <AlertBox message="Something went wrong." type="error" />

            <ProgressBar percentage={75} />

            <UserListWithStatus users={usersData} />

            <RecipeCard recipe={pizzaRecipe} />

            <ContentSection title="About Us">
                <p>We are a company dedicated to building powerful UI components.</p>
                <img src="https://placehold.co/150x100" alt="About Us" />
            </ContentSection>

            <ContentSection title="Contact Info">
                <ul>
                    <li>Email: info@example.com</li>
                    <li>Phone: 123-456-7890</li>
                </ul>
            </ContentSection>

            <FilterableList items={inventoryItems} filterCategory="Electronics" />
        </div>
    );
};

export default App;