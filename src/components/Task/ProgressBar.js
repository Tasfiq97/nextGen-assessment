import react from "react";

const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-1 w-64 bg-gray-300'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full ${
                    progressPercentage < 50 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
    );
};

export default ProgressBar;