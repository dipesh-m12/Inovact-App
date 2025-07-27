import FuzzyText from "@/components/react-bits/FuzzyText";

function NotFound() {
  return (
    <div className="min-h-screen gap-5 flex flex-col items-center justify-center">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.73}
        enableHover={true}
        fontSize="8rem"
        color="#000000"
      >
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.73}
        enableHover={true}
        fontSize="2.2rem"
        color="#000000"
      >
        Not Found
      </FuzzyText>
    </div>
  );
}

export default NotFound;
