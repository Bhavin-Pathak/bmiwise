/**
 * @param {string} height - Height value as string
 * @param {string} unit - Height unit ('cm' or 'inches')
 * @returns {string|null} Error message or null if valid
 */

export const validateHeight = (height, unit) => {
  if (!height || parseFloat(height) <= 0) {
    return "Please enter a valid height";
  }

  const heightValue = parseFloat(height);

  if (unit === "cm" && (heightValue < 50 || heightValue > 300)) {
    return "Height should be between 50-300 cm";
  }

  if (unit === "inches" && (heightValue < 20 || heightValue > 120)) {
    return "Height should be between 20-120 inches";
  }

  return null;
};

/**
 * @param {string} weight - Weight value as string
 * @returns {string|null} Error message or null if valid
 */

export const validateWeight = (weight) => {
  if (!weight || parseFloat(weight) <= 0) {
    return "Please enter a valid weight";
  }

  const weightValue = parseFloat(weight);

  if (weightValue < 10 || weightValue > 500) {
    return "Weight should be between 10-500 kg";
  }

  return null;
};

/**
 * @param {string} height - Height value
 * @param {string} weight - Weight value
 * @param {string} heightUnit - Height unit
 * @returns {object} Validation errors
 */

export const validateInputs = (height, weight, heightUnit) => {
  const errors = {};

  const heightError = validateHeight(height, heightUnit);
  if (heightError) {
    errors.height = heightError;
  }

  const weightError = validateWeight(weight);
  if (weightError) {
    errors.weight = weightError;
  }

  return errors;
};
