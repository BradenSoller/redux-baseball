import { useState } from 'react';


export default function CatcherForm() {
    return (
        <>
             <div>Total Catchers: {catcherList.length}</div>
       <h3>All Catchers</h3>
      <form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={handleCatcherNameChange}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
        </>
    )
}