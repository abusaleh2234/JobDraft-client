import choose from "../../assets/choose-img.jpg"
import world from "../../assets/world.png"
import message from "../../assets/massag.svg"
import man3 from "../../assets/123man copy.png"
import booksearch from "../../assets/booksearch2.png"

const ChooseWhy = () => {
    return (
        <div className=" max-w-6xl gap-8 md:flex mx-auto py-8">
            <div className="grid grid-cols-2 gap-6 w-7/12">
                <div className="p-5 space-y-2 bg-white rounded-xl">
                    <img className="w-32" src={man3} alt="" />
                    <h3 className="text-2xl font-semibold">Best talented people</h3>
                    <p>If success is a process with a number of defined steps.</p>
                </div>
                <div className="p-5 space-y-2 bg-white rounded-xl">
                    <img className="w-32" src={message} alt="" />
                    <h3 className="text-2xl font-semibold">Easy to communicate</h3>
                    <p>Having clarity of purpose and a clear picture of what you desire.</p>
                </div>
                <div className="p-5 space-y-2 bg-white rounded-xl">
                    <img className="w-32 p-6" src={world} alt="" />
                    <h3 className="text-2xl font-semibold">Easy to find candidate</h3>
                    <p>Introspection is the trick. Understand what you want.</p>
                </div>
                <div className="p-5 space-y-2 bg-white rounded-xl">
                    <img className="w-32 p-2" src={booksearch} alt="" />
                    <h3 className="text-2xl font-semibold">Global recruitment option</h3>
                    <p>There are basically six key areas to higher achievement.</p>
                </div>
            </div>
            <div className="w-5/12 ">
                <img className="rounded-xl" src={choose} alt="" />
            </div>
        </div>
    );
};

export default ChooseWhy;