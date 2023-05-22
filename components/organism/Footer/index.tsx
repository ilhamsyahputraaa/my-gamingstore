import React from "react";
import ColumnSatu from "./column-1";
import ColumnDua from "./column-2";

export default function Footer() {
  return (
    <>
      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <ColumnSatu />
              <ColumnDua />
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
