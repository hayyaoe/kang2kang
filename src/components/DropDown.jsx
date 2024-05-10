import { useState } from 'react';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close dropdown' : 'Open dropdown'}
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                </div>
            )}
        </div>
    );
};

export default DropDown;
