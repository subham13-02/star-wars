import "./shimmer.css";

export const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(6)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="shimmer-card"
          >
            <div className="shimmer"></div>
          </div>
        ))}
    </div>
  );
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
