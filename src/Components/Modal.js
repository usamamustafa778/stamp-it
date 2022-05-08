import React, { useState } from "react";

const Modal = () => {
  const [page, setPage] = useState(1);

  function goNextPage() {
    //stop on last page
    setPage((page) => page + 1);
    if (page === 4) {
      setPage(4);
    }
  }

  function goBackPage() {
    //stop on first page
    setPage((page) => page - 1);
    if (page === 1) {
      setPage(1);
    }
  }

  const [style, setStyle] = useState(false);

  return (
    <div className="Model">
      <div className="parent-div">
        <div className="component-div">
          <div className="display">
            {page === 1 && <Component1 />}
            {page === 2 && <Component2 />}
            {page === 3 && <Component3 />}
            {page === 4 && <Component4 />}
          </div>

          <button onClick={goBackPage} className="btns">
            Back
          </button>
          <button onClick={goNextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

function Component1() {
  return (
    <div>
      <h1>one</h1>
    </div>
  );
}

function Component2() {
  return (
    <div>
      <h1>two</h1>
    </div>
  );
}

function Component3() {
  return (
    <div>
      <h1>three</h1>
    </div>
  );
}

function Component4() {
  return (
    <div>
      <h1>Four</h1>
    </div>
  );
}
