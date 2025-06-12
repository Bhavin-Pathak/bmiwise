import GlassCard from "./cards";
import { getBMICategory } from "../utils/getBMICategory";

/**
 * BMI Result Display Component
 * @param {string} bmi - BMI value
 * @param {string} heightUnit - Height unit used for calculation
 */
const BMIResult = ({ bmi }) => {
  const categoryInfo = getBMICategory(parseFloat(bmi));

  return (
    <div className="mt-8 animate-fade-in">
      <GlassCard className="p-8">
        <div className="text-center">
          {/* BMI Display */}
          <div className="mb-8">
            <div className="text-6xl font-bold text-white mb-4 tracking-tight">
              {bmi}
            </div>
            <div className="text-white/70 text-lg mb-4">
              Your Body Mass Index
            </div>
            <div
              className={`inline-block px-6 py-3 rounded-2xl text-lg font-bold border-2 ${categoryInfo.bgColor} ${categoryInfo.color} ${categoryInfo.borderColor} backdrop-blur-sm`}
            >
              {categoryInfo.category}
            </div>
          </div>

          {/* BMI Categories Grid */}
          <div className="grid grid-cols-1 gap-6 mt-8">
            <GlassCard className="p-6">
              <p className="mb-10 text-white text-lg leading-relaxed text-center">
                Your BMI is{" "}
                <span className="font-bold text-cyan-400 text-2xl">{bmi}</span>{" "}
                which falls into the{" "}
                <span className="font-bold text-orange-400 text-2xl">
                  {categoryInfo.category}
                </span>{" "}
                category.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/20">
                  <span className="text-cyan-300">Underweight</span>
                  <span className="text-white/80 font-mono">&lt; 18.5</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-500/10 border border-emerald-400/20">
                  <span className="text-emerald-300">Normal</span>
                  <span className="text-white/80 font-mono">18.5 - 24.9</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg bg-amber-500/10 border border-amber-400/20">
                  <span className="text-amber-300">Overweight</span>
                  <span className="text-white/80 font-mono">25 - 29.9</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg bg-rose-500/10 border border-rose-400/20">
                  <span className="text-rose-300">Obese</span>
                  <span className="text-white/80 font-mono">≥ 30</span>
                </div>
              </div>
              <div className="mt-6 text-white/70 text-sm"></div>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-white text-lg leading-relaxed text-center">
                Remember, BMI is a general guideline and may not apply to all
                individuals. Always consult with a healthcare professional for
                personalized advice.
              </p>
              <div className="mt-4 text-white/70 text-sm">
                <p className="text-center">
                  For more information, visit the{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/bmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400"
                  >
                    WHO BMI Fact Sheet
                  </a>
                  .
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default BMIResult;
