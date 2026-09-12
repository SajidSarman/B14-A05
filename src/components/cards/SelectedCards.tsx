import React from 'react';

const SelectedCards = () => {
    return (
        <div className='border border-gray-200 rounded-2xl p-6 sticky top-26 mt-10'>
            <h1 className='font-semibold mb-1'>Your Stack</h1>
            <p className='text-[#94a3b8] text-[12px] mb-6'>No technologies selected yet.</p>

            <div className='border border-dashed border-gray-200 rounded-2xl py-8 flex justify-center'>
                <p className='text-[#94a3b8] text-[12px]'>Your stack is empty.</p>
            </div>

            {/* Button
            <div className="flex justify-center">
                <button className="bg-[#0b0f19] text-white font-medium px-6 py-2 rounded-xl text-sm w-full">
                    Add to Stack
                </button>
            </div> */}
        </div>
    );
};

export default SelectedCards;