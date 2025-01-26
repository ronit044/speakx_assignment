import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
 const title = useRef();
 const [page, setPage] = useState(1);
 const [results, setResults] = useState([]);
 const [noMoreResults, setNoMoreResults] = useState(false);

 const requestSearch = async () => {
  const searchTerm = title.current.value;
  if (!searchTerm) {
   console.log('empty search not alloweed is the!!');
   setResults([]);
   return;
  }
  try {
   const response = await axios.get('http://localhost:5000/api/questions/search', {
    params: {
     title: searchTerm,
     page: page,
     limit: 10,
    }
   });
  //  const response = await axios.get('http://localhost:5000/search', {
  //   params: {
  //    title: searchTerm,
  //    page: 10,
  //    limit: 10,
  //   }
  //  });

   const newResults = response.data.questions;
   if (newResults.length === 0 && page > 1) {
    setNoMoreResults(true);
    setResults([]);
    alert('No new questions available!');
   } else {
    setResults(newResults);
    setNoMoreResults(false);
   }
  } catch (err) {
   console.error('Error fetching data:', err);
  }
 };

 useEffect(() => {
  requestSearch();
 }, [page, title.current?.value]);

 const handleSearchButtonClick = () => {
  setPage(1);
  requestSearch();
 };

 return (
  <section className='content'>
   <div className='search-section'>
    <input
     type='text'
          ref={title}
     className='search'
      placeholder='Search Questions'
     onChange={requestSearch}
     />
    <button type="button" onClick={handleSearchButtonClick}>Search</button>
   </div>




   <div className='results'>
    {results.length > 0 ? (
     <ul>
      {results.map((question) => (
       <li key={question._id}>
        <p>{question.type}</p>
        <h3>Q: {question.title}</h3>
        {question.solution && question.solution.length > 0 && (
         <h4>Solution: {question.solution}</h4>
        )}


        {question.type === 'mcq' && question.options && (
         <div className='mcq-options'>
          {question.options.map((option, index) => (
           <label key={index}>
            <input type='radio' name={`question-${question._id}`} />
            {option}



           </label>
          ))}
         </div>
        )}
       </li>
      ))}
     </ul>
    ) : (
     <p  className='no-results'>No results to display</p>
    )}



    {results.length > 0 && !noMoreResults && (
     <div className='pagination'>
      <button
       className='prev'
       disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
       Prev
      </button>
      <button

       className='next'
       disabled={results.length < 10 || noMoreResults}
       onClick={() => setPage(page + 1)}
      >
       Next
      </button>
     </div>
    )}




   </div>
  </section >
 );
}

export default App;
