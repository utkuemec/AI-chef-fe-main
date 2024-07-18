import Lottie from "react-lottie";
import CoockinEggLottieData from "../../assets/lotties/cooking-egg.json";

const CookingEggLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CoockinEggLottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      isClickToPauseDisabled={true}
      options={defaultOptions}
      height={600}
      width={600}
    />
  );
};

export default CookingEggLottie;
