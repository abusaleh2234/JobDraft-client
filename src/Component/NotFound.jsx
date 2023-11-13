import NotFoundimg from "../assets/404.png"

const NotFound = () => {
    return (
        <div className="">
            <img className="w-full h-screen" src={NotFoundimg} alt="" />
        </div>
    );
};

export default NotFound;