import { useEffect, useState } from "react"
import './pagination.css'

function Pagination({ completeData, setData, itemsPerPage, setItemsPerPage }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const totalPages = Math.ceil(completeData.length / itemsPerPage)
        setTotalPages(totalPages)
        if(currentPage > totalPages && completeData.length > 0) {
            setCurrentPage(totalPages)
        }
        const start = (currentPage - 1) * itemsPerPage
        const end = start + itemsPerPage
        setData(completeData.slice(start, end))
    }, [currentPage, itemsPerPage, completeData])

    return (
        <div className="pagination">
            <span>Total items: <b>{completeData.length}</b></span>
            <span>Items per page:</span>
            <select onChange={(e) => setItemsPerPage(parseInt(e.target.value))}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <button aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
    )
}

export default Pagination;