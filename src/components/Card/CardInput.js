import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, selectLabels } from '../../redux/reducer';

const CardInput = () => {
  const [text, setText] = useState('');
  const [label, setLabel] = useState('');
  const [dueDate, setDueDate] = useState('');
  const labels = useSelector(selectLabels);
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(add({ text, label, dueDate }));
        setText('');
        setLabel('');
        setDueDate('');
      }}
      className='p-4 space-x-4 rounded-md border border-gray-400'
    >
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='テキスト'
        className='p-1 rounded border border-gray-400'
      />
      <input
        type='text'
        value={label}
        list='labelDatalist'
        onChange={(e) => setLabel(e.target.value)}
        placeholder='ラベル'
        className='p-1 rounded border border-gray-400'
      />
      <datalist id='labelDatalist'>
        {labels.map((label) => (
          <option key={label} value={label} />
        ))}
      </datalist>
      <input
        type='date'
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className='p-1 rounded border border-gray-400'
      />
      <button className=' p-1 bg-yellow-400 rounded'>作成</button>
    </form>
  );
};

export default CardInput;
