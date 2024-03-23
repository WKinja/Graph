import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const CalorieRepChart = () => {
  const [reps, setReps] = useState(10);
  const [exercise, setExercise] = useState('pushups');

  const exerciseCaloriesPerRep = {
    pushups: 0.5,
    squats: 0.8,
    situps: 0.3,
    // Add more exercises as needed
  };

  const caloriesPerRep = exerciseCaloriesPerRep[exercise];
  const calories = reps * caloriesPerRep;

  const data = {
    labels: ['Calories Burned', 'Reps'],
    datasets: [
      {
        data: [calories, reps],
        backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Quantity',
        },
      },
    },
  };

  const handleRepChange = (event) => {
    setReps(parseInt(event.target.value));
  };

  const handleExerciseChange = (event) => {
    setExercise(event.target.value);
  };

  return (
    <div>
      <h1>Calories vs Reps</h1>
      <div>
        <label htmlFor="exercise">Select Exercise:</label>
        <select id="exercise" value={exercise} onChange={handleExerciseChange}>
          <option value="pushups">Push-ups</option>
          <option value="squats">Squats</option>
          <option value="situps">Sit-ups</option>
          {/* Add more exercise options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="reps">Select Reps:</label>
        <select id="reps" value={reps} onChange={handleRepChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CalorieRepChart;