import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchGreetings from '../redux/fetchGreetings';

const Greeting = () => {
    const greeting = useSelector((state) => state.greetings);
    console.log(greeting.data.message)
    // console.log(greeting)

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchGreetings());
    }, [dispatch]);
    
    return(
        <>
        <div>{greeting.data.message}</div>;
        </>
    )
    }

    export default Greeting;