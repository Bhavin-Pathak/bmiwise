import { Calculator } from "lucide-react";

const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl mb-6 border border-white/20">
        <Calculator className="h-10 w-10 text-white" />
      </div>
      <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
        BMIWise
      </h1>
      <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
        Calculate your Body Mass Index with BMIWise 💪🏻
      </p>
    </div>
  );
};

export default Header;
