import { type Dispatch, type SetStateAction } from 'react';
import type { Icard } from '../../typs/card';
import { Bounce, toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';

interface AvailableCardsProps {
    cards: Icard[];
    selectedCards: Icard[];
    setSelectedCards: Dispatch<SetStateAction<Icard[]>>;
}

const AvailableCards = ({ cards, selectedCards, setSelectedCards }: AvailableCardsProps) => {
    // console.log("pppp ", cards)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                cards.map((card: Icard) => {
                    // const [isSelected, setIsSelected] = useState(false)
                    let isSelected = false;

                    for (const selectedCard of selectedCards) {
                        if (selectedCard.id === card.id) {
                            isSelected = true;
                        }
                    }



                    const handleSelectCard = () => {
                        if (isSelected) {
                            toast.warning(`${card.name} is already in your stack.`)
                            return
                        }

                        // setIsSelected(true)

                        toast.success(`${card.name} is added to your stack.`, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });

                        //selected cards logic
                        setSelectedCards([...selectedCards, card])
                    }


                    return (

                        <div key={card.id} className={`bg-white border shadow-sm rounded-2xl p-6 flex flex-col justify-between  ${isSelected ? 'border-[#db2777]' : 'border-gray-200'}`}>

                            {/*Icon, Badge */}
                            <div className="flex justify-between items-center mb-4">
                                <img src={card.icon} alt="icon" className="w-10 h-10 object-contain" />
                                {/* <span className="border border-blue-600 text-blue-600 text-xs px-2.5 py-1 rounded-full font-medium">
                                    {card.badge}
                                </span> */}
                                <div className="badge badge-soft badge-secondary">{card.badge}</div>
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
                                <div className='flex items-center gap-1'>
                                    <span className='text-yellow-400'><FaStar /></span>
                                    <p>{card.rating}</p>
                                </div>
                            </div>

                            {/*Button */}
                            <div className="flex justify-center">
                                <button onClick={() => handleSelectCard()}
                                    className={`font-semibold px-6 py-2 shadow-sm rounded-xl text-sm w-full transition
                                        ${isSelected ? 'text-[#db2777] bg-[#f3cadd]' : 'bg-[#0b0f19] text-white hover:bg-gray-700'}`}
                                >
                                    {isSelected === true ? "✓ Added to Stack" : "Add to Stack"}
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