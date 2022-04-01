import React, { useState, useEffect } from 'react';
import { ItemList } from '../itemList/ItemList';
import MockedItem from '../mock/MockedItem';
import Loader from '../animation/Spinner';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = catId
          ? MockedItem.filter((item) => item.category === catId)
          : MockedItem;

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [catId]);

  return loading ? (
    <div className='divLoader'>
      <Loader />
    </div>) 
    : (<div>
        <ItemList items={items} />
      </div>)
};
