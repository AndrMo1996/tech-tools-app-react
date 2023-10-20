import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank/Blank';

import EstimatorPage from './pages/Estimator/EstimatorPage';
import WorkHoursPage from './pages/WorkHours/WorkHoursPage';
import SubtasksPage from './pages/Subtasks/SubtasksPage';
import StatisticsPage from './pages/Statistics/StatisticsPage';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Blank />} />
            <Route path='/estimator' element={<EstimatorPage />} />
            <Route path='/remover' element={<Blank />} />
            <Route path='/subtasks' element={<SubtasksPage />} />
            <Route path='/workhours' element={<WorkHoursPage />} />
            <Route path='/statistics' element={<StatisticsPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
