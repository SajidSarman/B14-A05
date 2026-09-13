import React, { useState } from 'react';
import type { Icard } from '../../typs/card';

interface AvailableCardsProps {
    cards: Icard[];
}

//got useable data from Cards.tsx all data (Cards)
const AvailableCards = ({ cards } : AvailableCardsProps) => {
    console.log("pppp ", cards)

    
    return (
        <div className='grid grid-cols-3 gap-6 mt-10'>
            {
                cards.map((card: Icard) => {
                    const [isSelected, setIsSelected] = useState(false)

                    return (
                        
                        <div key={card.id} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between">

                            {/*Icon, Badge */}
                            <div className="flex justify-between items-center mb-4">
                                <img src={card.icon} alt="icon" className="w-10 h-10 object-contain" />
                                <span className="border border-blue-600 text-blue-600 text-xs px-2.5 py-1 rounded-full font-medium">
                                    {card.badge}
                                </span>
                            </div>

                            {/* dec*/}
                            <div>

                                <h2 className="text-xl font-bold text-gray-900 mb-2">{card.name}</h2>
                                <p className="text-gray-600 text-sm mb-6">{card.description}</p>
                            </div>

                            {/* dec2 */}
                            <div className='flex items-center gap-4 justify-between text-xs font-medium mb-6'>
                                <p className='bg-gray-100 rounded-md text-gray-700 px-2.5 py-1'>{card.category}</p>
                                {/* <p className='text-gray-500 px-2.5 py-1'>{card.difficulty}</p> */}
                                <p>{card.difficulty}</p>
                                {/* <p className='px-2.5 py-1'>{card.rating}</p> */}
                                <p>{card.rating}</p>
                            </div>

                            {/*Button */}
                            <div className="flex justify-center">
                                <button onClick={()=>{setIsSelected(true)}} 
                                className="bg-[#0b0f19] text-white font-medium px-6 py-2 rounded-xl text-sm w-full transition hover:bg-gray-700"
                                    disabled = {isSelected ? true : false}
                                    >
                                    {isSelected===true ? "Selected" : "Add to Stack"}
                                </button>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default AvailableCards;