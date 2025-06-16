# BMIWise

**BMIWise** a modern, responsive Body Mass Index (BMI) calculator built with React and styled with TailwindCSS. This application helps users calculate their BMI and understand their health status with an intuitive, clean interface.

![BMI Calculator Preview](preview/image.png)

## 🚀 Features

- **BMI Calculation**: Calculate BMI using height (cm) and weight (kg)
- **Health Categories**: Automatic categorization (Underweight, Normal, Overweight, Obese)
- **Input Validation**: Smart validation for positive numbers and realistic ranges
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Modern, intuitive interface with smooth animations
- **Health Information**: BMI categories reference and health guidelines
- **Reset Functionality**: Easy reset button to clear all inputs and results

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)
- **Build Tool**: Create React App

### Step 1: Clone the Repository

```bash
git clone https://github.com/Bhavin-Pathak/bmiwise.git
cd bitwise
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the port shown in your terminal).

## 🎯 Usage

1. **Enter Your Height**: Input your height in centimeters (cm)
2. **Enter Your Weight**: Input your weight in kilograms (kg)
3. **Calculate**: Click the "Calculate BMI" button
4. **View Results**: See your BMI value and health category
5. **Reset**: Use the reset button to clear all inputs and start over

### BMI Calculation Logic

The BMI calculation logic is separated into utility functions for easy maintenance and testing:

```javascript
// src/utils/calculateBMI.js
export const calculateBMI = (weight, height) => {
  const heightInMeters = height / 100;
  return (weight / (heightInMeters * heightInMeters)).toFixed(1);
};
```

**Note**: This BMI calculator is for informational purposes only and should not be used as a substitute for professional medical advice. Always consult with a healthcare provider for personalized health guidance.

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/Bhavin-Pathak/bmiwise/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact: bhavinpathak29@gmail.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. Follow React best practices
7. Use functional components with hooks
8. Write clean, commented code
9. Add tests for new features
10. Update documentation

## ⭐ If you found this project helpful, please give it a star!
