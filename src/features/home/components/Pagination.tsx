import ReactPaginate from "react-paginate";

export default function Pagination({
  articlesCount = "0",
  setPage,
}: {
  articlesCount: string;
  setPage: (page: number) => void;
}) {
  return (
    <ReactPaginate
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      breakClassName="page-item"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      activeClassName="active"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(selectedItem) => setPage(selectedItem.selected)}
      // pageRangeDisplayed={10}
      pageCount={Math.ceil(Number(articlesCount) / 3)} // default limit is 3 articles per page
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
{
  /* <ul className="pagination">

<li className="page-item active">
  <a className="page-link" href="">
    1
  </a>
</li>
<li className="page-item">
  <a className="page-link" href="">
    2
  </a>
</li>
</ul> */
}
