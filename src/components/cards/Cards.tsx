import { use, useState } from 'react';
import type { Icard } from '../../typs/card';
import AvailableCards from './AvailableCards';
import SelectedCards from './SelectedCards';

interface CardsProps {
    cardsPromise: Promise<Icard[]>
}

//gat data from App.tsx (pormise) all data
const Cards = ({ cardsPromise }: CardsProps) => {
    // console.log(cardsPromise)
    const cards = use(cardsPromise)
    // console.log("Cards: ", cards)

    const [selectedCards, setSelectedCards] = useState<Icard[]>([])

    return (
        <div className='container mx-auto'>
            <h1 className='text-[36px] font-extrabold'>Explore the <span className='bg-clip-text text-transparent bg-linear-to-r from-[#ec4899] to-[#8b5cf6]'>Technologies</span></h1>
            <p className='text-[#64748b]'>Pick one technology per category to build your ideal stack.</p>
            <div className='grid grid-cols-4 gap-8'>
                <div className='col-span-3'>
                    <AvailableCards cards={cards} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></AvailableCards>
                </div>

                <div className='col-span-1'>
                    <SelectedCards selectedCards={selectedCards} setSelectedCards={setSelectedCards}></SelectedCards>
                    {/* <SelectedCards cards={cards} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></SelectedCards> */}
                </div>

            </div>
        </div>
    );
};

export default Cards;