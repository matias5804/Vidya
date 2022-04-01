import React, { useState, useEffect } from 'react';
import {ItemDetail} from '../itemDetail/ItemDetail';
import  MockedItem  from '../mock/MockedItem';
import { useParams } from 'react-router-dom';
import Loader from '../animation/Spinner';

export const ItemDetailContainer = () => {
  
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {

    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = itemId && MockedItem.find((item) => item.id === itemId)
        resolve(myData);
      }, 1000);
    });

    getItems.then((res) => {
      setItem(res);
    }).finally(() => setLoading(false));
  
  }, [itemId]);

  return loading ? (
    <div className='loader'>
      <Loader/>
    </div>)
    : (<div>
        <ItemDetail item={item} />
      </div>)
  
};