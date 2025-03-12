import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/table/table'
import Pagination from './components/pagination/pagination'

// Method to Fetch data from api
const fetchData = (setCompleteData) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      setCompleteData(JSON.parse(xhttp.responseText))
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json", true);
  xhttp.send();

  //** fetch method of calling api
  // fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json')
  // .then(response => response.json())
  // .then(json => {
  //   setCompleteData(json)
  // })
  // */
}

function App() {

  const [data, setData] = useState([])
  const [completeData, setCompleteData] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Make api call on page load
  useEffect(() => {
    fetchData(setCompleteData);
  }, [])

  return (
    <>
      <h1>Table and Pagination demo</h1>
      <div className="card">
        <p>
          This is a demo of a table and pagination component.
        </p>
          <Table data={data} itemsPerPage={itemsPerPage}/>
          <Pagination completeData={completeData} setData={setData} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage}/>
      </div>
    </>
  )
}

export default App
