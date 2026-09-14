import { type Dispatch, type SetStateAction } from 'react';
import type { Icard } from '../../typs/card';
import { RxCross2 } from 'react-icons/rx';
import { Bounce, toast } from 'react-toastify';

interface SelectedCardsProps {
    // cards: Icard[];
    selectedCards: Icard[];
    setSelectedCards: Dispatch<SetStateAction<Icard[]>>;
}

const SelectedCards = ({ selectedCards, setSelectedCards }: SelectedCardsProps) => {

    // console.log(selectedCards, "from selectComponent")

    const handleRemoveCard = (card: Icard) => {
        const restCards = selectedCards.filter(selectedCard => selectedCard.name !== card.name)
        // console.log(restCards, "restCards");

        setSelectedCards(restCards)

        // toast.error(`${card.name} is removed from your stack.`);
        toast.warn(`${card.name} is removed from your stack.`, {
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
    }
    const handleRemoveAllCard = () => {
        setSelectedCards([])
        // toast.error("All technologies are removed from your stack.");
        toast.error('All technologies are removed from your stack.', {
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
    }

    if (selectedCards.length === 0) {
        return (
            <div className='border border-gray-200 shadow-sm rounded-2xl p-6 sticky top-26 mt-10'>
                <h1 className='font-semibold mb-1'>Your Stack</h1>
                <p className='text-[#94a3b8] text-[12px] mb-6'>No technologies selected yet.</p>

                <div className='border border-dashed border-gray-200 rounded-2xl py-8 flex justify-center'>
                    <p className='text-[#94a3b8] text-[12px]'>Your stack is empty.</p>
                </div>
            </div>

        )
    }

    return (
        <div className='border border-gray-200 rounded-2xl shadow-sm p-6 sticky top-26 mt-10'>
            <h1 className='font-semibold mb-1'>Your Stack</h1>
            <p className='text-[#94a3b8] text-[12px] mb-6'>{`${selectedCards.length} Technology Selected`}</p>

            {
                selectedCards.map(card => {
                    return (
                        <div key={card.id} className='flex justify-between items-center shadow-sm rounded-xl border border-gray-200 mb-2  p-3'>

                            <div className='flex justify-between items-center gap-2'>
                                <img src={card.icon} alt="icon" className="w-7 h-7 object-contain" />

                                <div>
                                    <h1 className='font-semibold text-[10px] text-[#0f172a]'>{card.name}</h1>
                                    <p className="font-semibold text-[#94a3b8] text-[6px]">{card.category}</p>
                                </div>
                            </div>

                            <span className='text-[#94a3b8] text-2xl cursor-pointer' onClick={() => handleRemoveCard(card)}>
                                <RxCross2 />
                            </span>

                        </div>
                    )
                })
            }


            {/* <div className='border border-dashed border-gray-200 rounded-2xl py-8 flex justify-center'>
                <p className='text-[#94a3b8] text-[12px]'>Your stack is empty.</p>
            </div> */}

            {/* Button */}
            <div className="flex justify-center mt-9">
                <button onClick={handleRemoveAllCard} className="border border-red-300 text-red-600 font-medium shadow-sm px-6 py-2 rounded-xl text-sm w-full">
                    Remove All
                </button>
            </div>
        </div>
    );
};

export default SelectedCards;