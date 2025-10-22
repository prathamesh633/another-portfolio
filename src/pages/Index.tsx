import { useState } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";
import Portfolio from "./Portfolio";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && (
        <LoadingAnimation onComplete={handleLoadingComplete} duration={2500} />
      )}
      {!showLoading && <Portfolio />}
    </>
  );
};

export default Index;
