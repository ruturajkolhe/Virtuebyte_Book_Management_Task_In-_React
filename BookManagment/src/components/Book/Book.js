
import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [books, setBooks] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const addBookData = () => {
    const inputbname = document.querySelector('input[name="bName"]').value;
    const inputName = document.querySelector('input[name="aName"]').value;
    const inputPrice = document.querySelector('input[name="bookp"]').value;
    console.log("input Price", inputPrice);

    if (inputbname && inputName && inputPrice) {
      const newBook = { id: idCounter, bName: inputbname, aName: inputName, Price: inputPrice };
      setIdCounter(idCounter + 1);
      setBooks([...books, newBook]);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleEdit = (id) => {
    const newName = prompt('Enter the new book name:');
    if (newName !== null && newName.trim() !== '') {
      const updatedBooks = books.map((book) =>
        book.id === id ? { ...book, bName: newName } : book
      );
      setBooks(updatedBooks);
    }
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <div className="container">
      <h1>Book Management</h1>
      <label>Add a Book Name</label>
      <input type="text" name="bName" placeholder="Enter the book name" />
      <br />
      <label>Book Author's Name</label>
      <input type="text" name="aName" placeholder="Enter the author name" />
      <br />
      <label>Book Price</label>
      <input type="text" name="bookp" placeholder="Enter the book price" />
      <br />
      <div className="button-container">
        <button type="button" onClick={addBookData}>Add Book</button>
        <button type="button" onClick={toggleTableVisibility}>
          {isTableVisible ? 'Hide Books' : 'View Books'}
        </button>
      </div>
      {isTableVisible && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.bName}</td>
                <td>{book.aName}</td>
                <td>{book.Price}</td>
                <td><button type="button" onClick={() => handleEdit(book.id)}>Edit</button></td>
                <td><button type="button" onClick={() => handleDelete(book.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Book;
