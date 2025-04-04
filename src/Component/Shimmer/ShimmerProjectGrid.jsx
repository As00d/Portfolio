import { ShimmerThumbnail } from "react-shimmer-effects";
const shimmerProduct = [1, 2, 3, 4];
const ShimmerProjectGrid = () => {
  return shimmerProduct.map((item) => {
    return <ShimmerThumbnail height={250} width={250} rounded />;
  });
};
export default ShimmerProjectGrid;
