import Book from "@components/ReaderProfile";
import ReaderProfile from "@components/ReaderProfile";

export default function Readers({readers}) {
    const readerItems = readers.map((reader, index) => <ReaderProfile key={index} reader={reader} />);
  return (
          readerItems
  )
}
