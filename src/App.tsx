// Hook imports
import { useState } from 'react';

// Component imports
import { Header, Input } from './components';

// App declaration
function App() {

  const [formData, setFormData] = useState({
    age: '',
    heigth: '',
    gender: '',
    currentWeight: '',
    goalWeight: '',
    goalTime: '',
    walkingDays: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Convert state values to the correct types and process them
    const numericAge = parseInt(formData.age, 10);
    // Repeat for other inputs...

    // Call your calculation function
    const milesPerSession = calculateWalkingPlan(numericAge, ...); // Add other parameters

    console.log(`Miles to walk per session: ${milesPerSession.toFixed(2)}`);
  };

  return (
    <main className='app-main'>
      <Header
        title='Weight Walkers'
      />

      <form className='app-form' onSubmit={handleSubmit}>

        <Input label='Age' placeholder='Your age' type='number' />
        <Input label='Height' placeholder='Height in cm' type='number' />
        <Input label='Gender' placeholder='select your gender' />
        <Input label='Current Weight' placeholder='Weight in kg' type='number' />
        <Input label='Goal Weight' placeholder='Weight in kg' type='number' />
        <Input label='Goal time' placeholder='Time to goal in months' type='number' />
        <Input label='Walking days' placeholder='Sessions a week' type='number' />

      </form>
    </main>
  );
}

export default App;
