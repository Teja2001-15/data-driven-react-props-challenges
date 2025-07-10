import React from "react";

const FilterableList = ({ items, filterCategory }) => {
    const filteredItems = filterCategory
        ? items.filter(item => item.category === filterCategory)
        : items;

    return (
        <ul className="item-list">
            {filteredItems.map(item => (
                <li key={item.id}>
                    {item.name} ({item.category})
                </li>
            ))}
        </ul>
    );
};

export default FilterableList;