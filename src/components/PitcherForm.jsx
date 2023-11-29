import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function PitcherForm() {

      const [newPitcher, setNewPitcher] = useState('');
    const [pitcherList, setPitcherList] = useState(['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia']);
    const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');
    const dispatch = useDispatch()


    const handlePitcherSubmit = (event) => {
    event.preventDefault();
    
        dispatch({
            type: 'PITCHER_LIST',
            payload: pitcherList   
        })
        setPitcherList([...pitcherList, newPitcher]);
    setNewPitcher('');
    };


     const handlePitcherNameChange = event => {
    setNewPitcher(event.target.value);
  };
    
    return (
        <>
            <div>Total Pitchers: {pitcherList.length}</div>
             <h2>On the Mound: {currentPitcher}</h2>
            <h3>All Pitchers</h3>
            <form onSubmit={handlePitcherSubmit}>
                <input
                    type="text"
                    value={newPitcher}
                    onChange={handlePitcherNameChange}
                    placeholder="New Pitcher Name"
                />
                <button type="submit">Add Pitcher</button>
            </form>
              <ul>
        {pitcherList.map(pitcher => (
          <li
            onClick={() => setCurrentPitcher(pitcher)}
          >
            {pitcher}
          </li>
        ))}
      </ul>
        </>
    )

} 