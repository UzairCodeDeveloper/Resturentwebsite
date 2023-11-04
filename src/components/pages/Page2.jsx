import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './page2.css';
import Burger from './Data/Burgers';
import pizza from './Data/Pizza';
import handi from './Data/Handi';
import Structure from './Structure';
export default function Page2() {
    const [selectedMenu, setSelectedMenu] = useState('Burgers');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='container Menucontainer'>
                    <div className='heading'>
                        <h2>Our Menu</h2>
                    </div>
                    <div className='Menubuttons container'>
                        <div className='menuBTN'>
                            <a href='#cs'
                                onClick={() => handleMenuClick('Burgers')}
                                className={selectedMenu === 'Burgers' ? 'active' : ''}
                            >
                                Burgers
                            </a>
                            <a href='#val'
                                onClick={() => handleMenuClick("Pizza's")}
                                className={selectedMenu === "Pizza's" ? 'active' : ''}
                            >
                                Pizza's
                            </a>
                            <a href='#ca'
                                onClick={() => handleMenuClick('Handi')}
                                className={selectedMenu === 'Handi' ? 'active' : ''}
                            >
                                Handi
                            </a>
                            <div className='slider' />
                        </div>
                        <div className='container menuDetail'>
    {selectedMenu === 'Burgers' && Burger.map((val, item) => (
        <Structure
            key={item} // Make sure to use a key for React list items
            image={val.image}
            title={val.title}
            ingredients={val.ingredients}
            Price={val.Price}
        />
    ))}
    {selectedMenu === "Pizza's" && pizza.map((val, item) => (
        <Structure
            key={item} // Make sure to use a key for React list items
            image={val.image}
            title={val.title}
            ingredients={val.ingredients}
            Price={val.Price}
        />
    ))}
    {selectedMenu === 'Handi' && handi.map((val, item) => (
        <Structure
            key={item} // Make sure to use a key for React list items
            image={val.image}
            title={val.title}
            ingredients={val.ingredients}
            Price={val.Price}
        />
    ))}
</div>

                    </div>
                </div>
            </div>
        </>
    );
}
