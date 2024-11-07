import React, { useState } from 'react';
import './Menu.css';

// Sample menu data with URLs for item images
const menuData = {
    "Shawarma": { price: 299, restaurants: ["Restaurant A", "Restaurant B", "Restaurant C"], imageUrl: "https://tse4.mm.bing.net/th?id=OIP.O_36KDxDkOxsfoSpb5yzjQHaEK&pid=Api&P=0&h=180" },
    "Biryani": { price: 349, restaurants: ["Restaurant D", "Restaurant E", "Restaurant F"], imageUrl: "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_1799/https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg" },
    "Fried Rice": { price: 249, restaurants: ["Restaurant A", "Restaurant B"], imageUrl: "https://tse3.mm.bing.net/th?id=OIP.jCTttlKz49sjojN3Igxj-QAAAA&pid=Api&P=0&h=180" },
    "Burger": { price: 199, restaurants: ["Restaurant C", "Restaurant D"], imageUrl: "https://tse1.mm.bing.net/th?id=OIP.9WOvj3rAHJ_vug999PKi0QHaHa&pid=Api&P=0&h=180" },
    "French Fries": { price: 149, restaurants: ["Restaurant A", "Restaurant B"], imageUrl: "https://goldenfingers.us/wp-content/uploads/2020/03/french_fry.jpg" },
    "Nachos": { price: 179, restaurants: ["Restaurant C", "Restaurant D"], imageUrl: "https://tse2.mm.bing.net/th?id=OIP.1r5-kqAK3c6RLCCq3odfgAHaLH&pid=Api&P=0&h=180" },
    "Chocolate Cake": { price: 250, restaurants: ["Restaurant A", "Restaurant B"], imageUrl: "https://joyfoodsunshine.com/wp-content/uploads/2020/08/best-chocolate-cake-recipe-9.jpg" },
    "Ice Cream": { price: 150, restaurants: ["Restaurant C", "Restaurant D"], imageUrl: "https://tse1.mm.bing.net/th?id=OIP.ywlZuj-ShTWHZX72zsYtlAHaHI&pid=Api&P=0&h=180" },
    "Soda": { price: 99, restaurants: ["Restaurant A", "Restaurant E", "Restaurant F"], imageUrl: "https://tse4.mm.bing.net/th?id=OIP.1gIP_AKCym9tRJwTIAVRKQHaHa&pid=Api&P=0&h=180" },
    "Coffee": { price: 149, restaurants: ["Restaurant C", "Restaurant D"], imageUrl: "https://www.myweekly.co.uk/wp-content/uploads/sites/9/2018/06/iStock-814684194-coffee-x.jpg" }
};

function Menu() {
    const [category, setCategory] = useState('All');
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);

    const filterMenu = (selectedCategory) => {
        setCategory(selectedCategory);
        setSelectedItem(null);
    };

    const selectItem = (itemName) => {
        const newItem = menuData[itemName];
        setCart([...cart, itemName]);
        setTotal(total + newItem.price);
        setSelectedItem(newItem);
    };

    const promptAddress = () => {
        const address = window.prompt("Please enter your delivery address:");
        if (address) {
            alert(`Your order will be delivered to: ${address}`);
        } else {
            alert("Delivery address is required.");
        }
    };

    return (
        <div className="container">
            <h1>Delicious Menu</h1>

            {/* Categories */}
            <div className="categories">
                {["All", "Main Course", "Snacks", "Desserts", "Drinks"].map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn ${category === cat ? 'active' : ''}`}
                        onClick={() => filterMenu(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Menu Items */}
            <div className="menu">
                {Object.keys(menuData)
                    .filter(itemName => category === "All" || category === menuData[itemName].category)
                    .map((itemName) => {
                        const item = menuData[itemName];
                        return (
                            <div key={itemName} className="menu-item" onClick={() => selectItem(itemName)}>
                                <img src={item.imageUrl} alt={itemName} />
                                <div className="item-info">
                                    <h3>{itemName}</h3>
                                    <p className="price">₹{item.price}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>

            {/* Details Section */}
            {selectedItem && (
                <div className="details">
                    <div className="cost">
                        <h2>Cost</h2>
                        <p>Cost: ₹{selectedItem.price}</p>
                    </div>
                    <div className="restaurants">
                        <h2>Available at:</h2>
                        <ul>
                            {selectedItem.restaurants.map((restaurant, index) => (
                                <li key={index}>{restaurant}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Cart Section */}
            <div className="cart">
                <h2>Your Cart</h2>
                <ul className="cart-items">
                    {cart.map((itemName, index) => (
                        <li key={index}>{itemName} - ₹{menuData[itemName].price}</li>
                    ))}
                </ul>
                <div className="total">Total: ₹{total}</div>
                <button className="delivery-btn" onClick={promptAddress}>Delivery</button>
            </div>
        </div>
    );
}

export default Menu;
