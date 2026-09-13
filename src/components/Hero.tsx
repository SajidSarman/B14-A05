
import Banner from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center container mx-auto mt-5 mb-10 px-4 gap-10 text-center md:text-left'>
            <div className='max-w-150'>
                <h1 className='text-[60px] font-extrabold'>Build Your Ideal</h1>
                <h1 className='text-[60px] font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]'>Development Stack</h1>
                <p className='mb-10 max-w-125 text-[#475569]'>
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div className='flex gap-4'>
                <button className='text-white bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg px-3 py-2'>Explore Technologies</button>
                <button className='border rounded-lg px-12 py-2'>Learn More</button>
                </div>
            </div>
            <div className='max-w-137.5'>
                <img  src={Banner} alt="Banner image" />
            </div>
        </div>
    );
};

export default Hero;
