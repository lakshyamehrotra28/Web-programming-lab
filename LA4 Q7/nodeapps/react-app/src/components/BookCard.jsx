function BookCard({ book }) {
  const info = book.volumeInfo;

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        width: "150px"
      }}
    >
      <img
        src={info.imageLinks?.thumbnail}
        alt="Book"
        style={{ width: "100%" }}
      />
      <h4>{info.title}</h4>
      <p>{info.authors?.join(", ")}</p>
      <p>{info.publisher}</p>
      <p>{info.publishedDate}</p>
    </div>
  );
}

export default BookCard;