import React from 'react'

const Search = ({ setSearch }) => {
  const handleSearch = (value) => {

  }
  return (
    <form>
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control form-control-lg"
          placeholder="Recipient's username"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-block btn-outline-success"
        >
          Search...
        </button>
      </div>
    </form>
  )
}

export default Search