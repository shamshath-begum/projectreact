import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Rating from '@mui/material/Rating';
import {useState} from 'react';
import React from 'react';


function App() {
  let [count,setCount]= useState(0);
  let [toggle1,setToggle1]=useState(true);
  let [toggle2,setToggle2]=useState(true);
  let [toggle3,setToggle3]=useState(true);
  
  return <div>
  <NavBar data={{count,setCount}}/>
  <Header/>
  
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
                <div className="card h-100">
                    {/*<!-- Product image-->*/}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {/*<!-- Product details-->*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/*<!-- Product name-->*/}
                            <h5 className="fw-bolder">Fancy Product</h5>
                            {/*<!-- Product Review-->*/}
                            <div className='text-center'>
                                <Rating name="full-rating" defaultValue={2} precision={1}/>
                                </div>

                            {/*<!-- Product price-->*/}
                            $ 400.00
                        </div>
                    </div>
                    {/*<!-- Product actions-->*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          {
                            toggle1?<button className='btn btn-outline-dark mt-auto'onClick={()=>{setCount(++count);setToggle1(!toggle1)}}>Add to Cart</button>
                            :
                            <button className='btn btn-outline-dark mt-auto'onClick={()=>{setCount(--count);setToggle1(!toggle1)}}>Remove</button>
                          }
                            </div>
                    </div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="card h-100">
                    {/*<!-- Product image-->*/}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {/*<!-- Product details-->*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/*<!-- Product name-->*/}
                            <h5 className="fw-bolder">Dairy Product</h5>
                            {/*<!-- Product Review-->*/}
                            <div className='text-center'>
                                <Rating name="full-rating" defaultValue={2} precision={1}/>
                                </div>
                            {/*<!-- Product price-->*/}
                            $ 400.00
                        </div>
                    </div>
                    {/*<!-- Product actions-->*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          {
                           toggle2? <button className='btn btn-outline-dark mt-auto'onClick={()=>{setCount(++count);setToggle2(!toggle2)}}>Add to Cart</button>
                           :
                           <button className='btn btn-outline-dark mt-auto'onClick={()=>{setCount(--count);setToggle2(!toggle2)}}>Remove</button>
                          }
                            </div>
                    </div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="card h-100">
                    {/*<!-- Product image-->*/}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {/*<!-- Product details-->*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/*<!-- Product name-->*/}
                            <h5 className="fw-bolder">Sationary Product</h5>
                            {/*<!-- Product Review-->*/}
                            <div className='text-center'>
                                <Rating name="full-rating" defaultValue={2} precision={1}/>
                                </div>
                            {/*<!-- Product price-->*/}
                            $ 200.00
                        </div>
                    </div>
                    {/*<!-- Product actions-->*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                        {
                           toggle3? <button className='btn btn-outline-dark mt-auto'onClick={()=>{setCount(++count);setToggle3(!toggle3)}}>Add to Cart</button>
                           :
                           <button className='btn btn-outline-dark mt-auto'onClick={()=>{setCount(--count);setToggle3(!toggle3)}}>Remove</button>
                          }
                            
                    </div>
                </div>
            </div>
            </div>
            </div>

          </div>
        </section>
  
       </div>


}

export default App;
