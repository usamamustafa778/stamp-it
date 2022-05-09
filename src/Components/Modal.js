import React, { useState } from "react";

const Modal = ({ isOpen, setIsOpen, setNewModal, newModal }) => {
  const [page, setPage] = useState(1);

  function goNextPage() {
    //stop on last page
    setPage((page) => page + 1);
    if (page === 3) {
      setIsOpen(false);
    }
  }

  function goBackPage() {
    //stop on first page
    setPage((page) => page - 1);
    if (page === 1) {
      setPage(1);
    }
  }

  function closeModel() {
    setIsOpen(false);
  }

  const [style, setStyle] = useState(false);

  return (
    <div className="Model">
      <div className="parent-div">
        <div className="row justify-content-end">
          <div onClick={closeModel}>
            <img src="/images/icons/cross.png" className="close" alt="" />
          </div>
        </div>
        <div className="component-div">
          <div className="display">
            {page === 1 && <Component1 />}
            {page === 2 && <Component2 />}
            {page === 3 && (
              <Component3
                newModals={newModal}
                setNewModals={setNewModal}
                setIsOpens={setIsOpen}
              />
            )}
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-md-6 d-flex justify-content-between">
              <div onClick={goBackPage} className="btns text-gray btn-modal">
                {/* &lt;  */}
                {page == 3 ? "Abbrechen" : "< zurück"}
              </div>
              <div className="text-green btn-modal" onClick={goNextPage}>
                {page == 3 ? "Jetzt registrieren" : "weiter >"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

function Component1() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 mt-2">
          <h6 className="text-red text-center">
            Um deine Registrierung abzuschließen, beantworte bitte folgende
            Fragen
          </h6>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <p>Was sind deine Engpässe/Probleme?</p>
          <p>1/3</p>
        </div>
        <div className="col-md-12">
          <textarea
            className="w-100 Engp"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 mt-2">
          <h6 className="text-red text-center">
            Um deine Registrierung abzuschließen, beantworte bitte folgende
            Fragen
          </h6>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <p>Würdest du unser Konzept nutzen und wenn ja, warum?</p>
          <p>2/3</p>
        </div>
        <div className="col-md-12">
          <textarea
            className="w-100 Engp"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  //show modal
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 mt-2">
          <h6 className="text-red text-center">
            Vielen Dank für dein Feedback!
          </h6>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-10">
          <p>
            Danke, dass du Dir die Zeit genommen hast, diese Fragen zu
            beantworten! Schließe jetzt deine Registrierung ab und werde ein
            Teil von etwas ganz Großem.
          </p>
        </div>
        <div className="col-md-2 d-flex justify-content-end">
          <p>3/3</p>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-md-12" style={{fontSize:"12px"}}>
          * Mit der Registrierung stimmst du XXXXXXXXXXXX zu.
        </div>
      </div>
    </div>
  );
}
