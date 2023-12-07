'use client';

import CardTemplate from './Cards';
import { Grid, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getCourses, addCourse } from '../utils/api';


export default function CatalogoCursos() {
  const [courses, setCourses] = useState([]);

  useEffect(() =>   {
    async function fetchCourses() {
      try {
        const data = await getCourses();
        console.log('Data:', data); // Agrega esta línea
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  }, []);



  return (
    
    <Grid container spacing={1}>
       {courses.map((course) => (
        <Grid item xs={12} sm={6} md={3}>
        <CardTemplate
          key={course._id} 
          title={course.title} 
          description={course.description}
          image={ "static/images/" + course.image}
          rating={course.rating} 
          href={course._id}></CardTemplate>
          </Grid>
        ))}
       

    </Grid>
    
  );
}

/*
{courses.map((course) => (
  <CardTemplate
    key={course._id} 
    title={course.title} 
    description={course.description}
    image={course.image}
    rating={course.rating} 
    href={course.title}></CardTemplate>
))}
*/