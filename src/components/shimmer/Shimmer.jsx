import "./shimmer.css";
import { InfinitySpin } from  'react-loader-spinner';
export const Shimmer = () => {
  return (<div className="loading"> 
                <InfinitySpin 
                    width='200'
                    color="rgb(203,26,128)"
                />
    </div>)
};

export const ShimmerForList = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {Array(6)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-container w-full h-10">
            <div className="shimmer"></div>
          </div>
        ))}
    </div>
  );
};
