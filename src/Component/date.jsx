
import { Puff } from 'react-loader-spinner'

const Spinner = () => {

    return (
        <div className="sweet-loading w-full">
            <div className="">
                <div className="flex justify-center">
                <Puff
                    height="80"
                    width="80"
                    radius={1}
                    color="blue"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                </div>
            </div>
        </div>
    );
}

export default Spinner;