import blogbg from '../../assets/job-bbnn.jpg';
import blogimg1 from "../../assets/blog-11.jpg"
import blogimg2 from "../../assets/blog22.jpg"

const Blogs = () => {
    return (
        <div>
            <div className="">
                <div className="relative bg-cover bg-center	bg-no-repeat" style={{ backgroundImage: `url(${blogbg})` }}>
                    <div className="z-0 hero-overlay absolute  bg-black bg-opacity-60"></div>
                    <div className="relative hero-content  text-center text-white py-14">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Blog</h1>
                            <p className="mb-5">Home / Blog</p>
                        </div>
                    </div>
                </div>
                <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-3">
                        <img className='rounded-xl' src={blogimg1} alt="" />
                        <h2 className='text-2xl font-bold text-blue-500'> Guardian Careers</h2>
                        <p className=''>As you would expect from the Guardian, this is a top-quality blog that is jammed full of insightful advice and ideas. Its really comprehensive and a great place to start researching just about any aspect of job-seeking. Features a lot of first-person stories that are really inspirational, often with examples which challenge stereotypes about particular jobs or career paths.</p>
                    </div>
                    <div className="space-y-3">
                        <img className='rounded-xl' src={blogimg2} alt="" />
                        <h2 className='text-2xl font-bold text-blue-500'>Undercover Recruiter</h2>
                        <p>A light and accessible blog that nicely balances genuinely sensible advice with a bit of fun. Posts are sorted by topic, which is useful if you just want to read about a particular theme social media or interview tips for example.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;