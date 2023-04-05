import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="https://drive.google.com/file/d/1FZ4dlBtOvbhF5auphs1pKZQCkCqmDUSX/view?usp=share_link" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
