import { useState } from "react";
import { Calculator, Scale, Ruler, RotateCcw } from "lucide-react";
import GlassCard from "./components/cards";
import ModernInputField from "./components/inputfields";
import HeightUnitToggle from "./components/units";
import BMIResult from "./components/result";
import AnimatedBackground from "./components/background";
import Header from "./components/header";
import Footer from "./components/footer";
import { calculateBMI } from "./utils/calculateBMI";
import { validateInputs } from "./utils/validations";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [bmi, setBMI] = useState(null);
  const [errors, setErrors] = useState({});

  const handleCalculate = () => {
    const validationErrors = validateInputs(height, weight, heightUnit);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const calculatedBMI = calculateBMI(
        parseFloat(weight),
        parseFloat(height),
        heightUnit
      );
      setBMI(calculatedBMI);
    }
  };

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setBMI(null);
    setErrors({});
  };

  const handleHeightUnitChange = (unit) => {
    setHeightUnit(unit);
    setHeight(""); // Clear height when switching units
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <Header />

        {/* Calculator Form */}
        <GlassCard className="p-8 mb-8">
          <HeightUnitToggle
            unit={heightUnit}
            onToggle={handleHeightUnitChange}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ModernInputField
              label="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={`Enter height in ${heightUnit}`}
              icon={Ruler}
              unit={heightUnit}
              error={errors.height}
            />

            <ModernInputField
              label="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              icon={Scale}
              unit="kg"
              error={errors.weight}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={handleCalculate}
              className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 
                         text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 
                         flex items-center justify-center gap-3 text-lg shadow-2xl hover:shadow-purple-500/25
                         border border-white/20 backdrop-blur-sm hover:scale-105 transform"
            >
              <Calculator className="h-6 w-6" />
              Calculate BMI
            </button>

            <button
              onClick={handleReset}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl 
                         transition-all duration-300 flex items-center justify-center gap-3 text-lg
                         border border-white/20 backdrop-blur-sm hover:scale-105 transform"
            >
              <RotateCcw className="h-6 w-6" />
              Reset
            </button>
          </div>
        </GlassCard>

        {/* Results */}
        {bmi && <BMIResult bmi={bmi} heightUnit={heightUnit} />}

        {/* Footer */}
        <Footer />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
