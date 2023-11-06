import { FC, useEffect } from "react";
import Detiles from "./Detiles";
import Botoomside from "./Botoomside";
import { fetchProducts } from "../../store/fetchproduct";
import {useSelector } from 'react-redux';
import { cartype } from "../../hooks/types";
import { useAppDispatch } from "../../store/store";

const Boxcar: FC = () => {
  const selectednum = useSelector((state:{selectedNum:number}) => state.selectedNum); 
  const searchvalue = useSelector((state:{shearchvalue:string}) => state.shearchvalue)
  const cars = useSelector((state: any) => state.cars.data); 
  
  const dispatch = useAppDispatch();  
  
  useEffect(() => {
    dispatch(fetchProducts(selectednum));
  }, [selectednum]);
  
  const generateRandomPrice = () => {
  return (Math.floor(Math.random() * 100) + 1).toFixed(2); // Generates a random price between 1 and 100 with 2 decimal places
  };

  return (
  <section className="Boxcar_container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-8 ">
  {
  (cars.filter((car:cartype) => car.title.toLowerCase().startsWith(searchvalue.toLowerCase())).map((car: cartype, index: number) => {
  const randomPrice = generateRandomPrice();
  return (
  <div key={index} className="p-6 cursor-pointer rounded-2xl shadow-md border border-solid border-primary bg-primary">
  <img src={car.image} alt="car_image" className="w-full h-52 rounded-2xl" />
  <p className="my-6 font-medium text-blacky text-2xl">{car.title}<span className=" float-right px-2 py-1 !text-base border border-dashed !font-normal rounded-2xl border-blue ">{car.start_production}</span></p>
  <Detiles />
  <Botoomside price={randomPrice} />
  </div>
  );
  }))
  }
  </section>
  );
}

export default Boxcar;