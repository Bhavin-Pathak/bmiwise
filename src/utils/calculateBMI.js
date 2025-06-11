/**
 * @param {number} weight - Weight in kilograms
 * @param {number} height - Height in cm or inches
 * @param {string} unit - Height unit ('cm' or 'inches')
 * @returns {string} BMI value rounded to 1 decimal place
 */
export const calculateBMI = (weight, height, unit) => {
  let heightInMeters;

  if (unit === "inches") {
    heightInMeters = (height * 2.54) / 100; // Convert inches to meters
  } else {
    heightInMeters = height / 100; // Convert cm to meters
  }

  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(1);
};
