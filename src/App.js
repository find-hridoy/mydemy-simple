import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import CourseGallery from './components/CourseGallery/CourseGallery';


function App() {
  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="course-gallery">
        <CourseGallery></CourseGallery>
      </div>
    </div>
  );
}

export default App;
