import './listItem.css';
import {useState} from "react";

function ListItem() {

    const [items, setItems] = useState([
        {index: 1, itemName: 'bread', quantity: 1, priority: 2, isSelected: false},
        {index: 2, itemName: 'eggs', quantity: 1, priority: 2, isSelected: false},
        {index: 3, itemName: 'bananas', quantity: 1, priority: 2, isSelected: false}
    ]);

    const [inputValue, setInputValue] = useState('');

    const randomize = (maxLimit = 100) => {
        let res = Math.random() + maxLimit;
        return res;
    };

    const toggleComplete = (index) => {
        const newItems = [...items];

        newItems[index].isSelected = !newItems[index].isSelected;

        setItems(newItems);
    };

    const handleAddButtonClick = () => {
        const newItem = {
            index: randomize(),
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');
    };

    const handleRemoveButtonClick = ({index}) => {
        setItems(items.filter((item) => item.index !== index));
    };

    const handleQuantityIncrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity++;

        setItems(newItems);
    };

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity--;

        setItems(newItems);
    };

    return (
        <div className="listitem">
            <div className='list'>List-item</div>
            <div className='add-item-box'>
                <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}  placeholder='Add an item...' />
                <button onClick={() => handleAddButtonClick()} >Add</button>
            </div>
            <div className='item-container'>
                <div className='item-list'>
                    {items.map((item, index) => (
                        <div className='item-container'>
                            <div className='item-name' onClick={() => toggleComplete(index)}>
                                {item.isSelected ? (
                                    <>
                                        <span className='completed'>{item.itemName}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{item.itemName}</span>
                                    </>
                                )}
                            </div>
                            <div className='quantity'>
                                <button onClick={() => handleQuantityDecrease(index)}>-
                                </button>
                                <span> {item.quantity} </span>
                                <button onClick={() => handleQuantityIncrease(index)}>+
                                </button>
                            </div>
                            <div className='remove'>
                                <button onClick={() => handleRemoveButtonClick(item)}>
                                    Remove
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListItem;
