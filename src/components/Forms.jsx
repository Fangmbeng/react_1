import React from 'react';
import Buttons from './Buttons';
import Dashboard from './Dashboard';
import { useForm } from "react-hook-form";



export default function Forms() {
  const{register} = useForm([])

  function handleForm(event){
    event.preventDefault();
    let car_model = event.target.car_model.value;
    let year = event.target.year.value;
    console.log(car_model, year)
  }

  return (
    <div className='container'>
      <form action="" method="POST" onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputcar_model" className="form-label">Car Model</label>
          <input type="text" className="form-control" {...register('car_model')} id="car_model"  aria-describedby="car_modelHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputYear" className="form-label">Release Year</label>
          <input type="text" className="form-control" {...register('year')} id="year" aria-describedby="yearHelp"/>
        </div>
        <Buttons handleForm={handleForm}/>
        <Dashboard handleForm={handleForm}/>
      </form>
    </div>
  )
};