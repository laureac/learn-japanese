import React from 'react';
import './list.scss';
import book from '../../assets/book.png';
import audio from '../../assets/headset.png'
import loop from '../../assets/loop.png'



function List() {
  return (
        <ul>
            <li className='block'>
                <img className='icon' src={book} alt='book icon'/>
                <p>
                    <span className='bold'>Detailed lessons.</span>&nbsp;
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis 
                    dis parturient montes, nascetur ridiculus mus. 
                    
                </p>
            </li>
            <li className='block'>
                <img className='icon' src={audio} alt='headset icon'/>
                <p>
                    <span className='bold'>Engaging audio.</span>&nbsp;
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
                    aliquet nec, vulputate eget, arcu. 
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                     Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
                     
                </p>
            </li>
            <li className='block'>
                <img className='icon' src={loop} alt='loop icon'/>
                <p>
                    <span className='bold'>Flexible subscription. </span>
                    Aenean imperdiet. Etiam ultricies nisi vel augue. 
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. 
                    Maecenas tempus, tellus eget condimentum rhoncus, 
                    sem quam semper libero. 
                </p>
            </li>
        </ul>
  );
}

export default List;
