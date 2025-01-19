import { FcNext, FcPrevious } from "react-icons/fc";
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
      containerClassName="flex gap-2 justify-center items-center my-4"
      pageClassName="border border-gray-400 px-2 py-1 rounded-md"
      breakClassName="border border-gray-400 px-2 py-1 rounded-md"
      activeClassName="active bg-blue-400 text-white"
      breakLabel="..."
      previousLabel={<FcPrevious />}
      onPageChange={(selectedItem) => setPage(selectedItem.selected)}
      pageCount={Math.ceil(Number(articlesCount) / 3)} // default limit is 3 articles per page
      nextLabel={<FcNext />}
      renderOnZeroPageCount={null}
      marginPagesDisplayed={1}
    />
  );
}
