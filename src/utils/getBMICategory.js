/**
 * @param {number} bmi - BMI value
 * @returns {object} Category information with styling classes
 */

export const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
    return {
      category: "Underweight",
      color: "text-cyan-400",
      bgColor: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-400/30",
    };
  }

  if (bmi >= 18.5 && bmi < 25) {
    return {
      category: "Normal Weight",
      color: "text-emerald-400",
      bgColor: "bg-gradient-to-r from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-400/30",
    };
  }

  if (bmi >= 25 && bmi < 30) {
    return {
      category: "Overweight",
      color: "text-amber-400",
      bgColor: "bg-gradient-to-r from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-400/30",
    };
  }

  return {
    category: "Obese",
    color: "text-rose-400",
    bgColor: "bg-gradient-to-r from-rose-500/20 to-red-500/20",
    borderColor: "border-rose-400/30",
  };
};
