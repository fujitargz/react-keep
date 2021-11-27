import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <div className='py-2 px-4 rounded-md border border-gray-400'>
      <p>{props.content}</p>
      <button
        className='flex items-center py-1 px-2 rounded-md border border-gray-200'
        onClick={() => dispatch(remove(props.content))}
      >
        <FontAwesomeIcon icon={faTrash} size='md' className='mr-2' />
        <p>削除</p>
      </button>
    </div>
  );
};

export default Card;
