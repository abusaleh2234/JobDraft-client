import girl from '../../assets/gir-large.png';
import { FiUpload } from 'react-icons/fi';


const Explore = () => {
    return (
        <div className='relative md:flex max-w-[1220px] items-center  py-20 mx-auto '>
            <div className=" w-4/12 z-40">
                <img className='w-full' src={girl} alt="" />
            </div>
            <div className="absolute w-8/12 right-5">
            <div className=" bg-blue-500 text-white p-16 rounded-xl space-y-5">
                <h4 className='text-xl font-bold'>Explore New Life</h4>
                <h2 className='text-5xl font-bold'>Do not just find. be found put your CV in front of great employers</h2>
                <p>Enhance your job search experience - showcase your CV to top employers and increase your visibility in the job market. Don not just find opportunities; let opportunities find you.</p>
                <button className='flex items-center gap-2 bg-white font-semibold text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg px-8 py-4'>Uplode Your Resume <span className='text-2xl font-bold'><FiUpload></FiUpload></span></button>
            </div>
            </div>
            <div className=" w-4/12 z-40">
                <img className='w-full' src={girl} alt="" />
            </div>
            <div className="absolute w-8/12 right-5">
            <div className=" bg-blue-500 text-white p-16 rounded-xl space-y-5">
                <h4 className='text-xl font-bold'>Explore New Life</h4>
                <h2 className='text-5xl font-bold'>Do not just find. be found put your CV in front of great employers</h2>
                <p>Enhance your job search experience - showcase your CV to top employers and increase your visibility in the job market. Don not just find opportunities; let opportunities find you.</p>
                <button className='flex items-center gap-2 bg-white font-semibold text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg px-8 py-4'>Uplode Your Resume <span className='text-2xl font-bold'><FiUpload></FiUpload></span></button>
            </div>
            </div>
        </div>
    );
};

export default Explore;