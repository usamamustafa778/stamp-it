import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import "./style.css";

function Hero() {
  //model making the state
  const [isOpen, setIsOpen] = useState(false);
  const [newModal, setNewModal] = useState(false);

  console.log(newModal);

  const modal = () => {
    setIsOpen(!isOpen);
  };

  function closeModel() {
    setNewModal(false);
  }

  return (
    <div id="hero" className="container-fluid pt-5 hero">
      <div className="row justify-content-center">
        {isOpen ? (
          //make modal
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            newModal={newModal}
            setNewModal={setNewModal}
          />
        ) : null}
        {newModal ? (
          <div className="Model">
            <div className="parent-div">
              <div className="row justify-content-end">
                <div onClick={closeModel}>
                  <img src="/images/icons/cross.png" className="close" alt="" />
                </div>
              </div>
              <div>
                <h1>message is tdasfdasd</h1>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="container pt-5 mt50-s">
        <div className="row text-white">
          <div className="col-md-6">
            <p>JETZT LOSLEGEN</p>
            <h1 className="h-tagline">
              <strong>Registrieren und kostenlose Testversion nutzen</strong>
            </h1>
            <div className="row mt-4">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-field">
                      <p>Vorname</p>
                      <input type="text" name="" id="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-field mt20-s">
                      <p>Nachname</p>
                      <input type="text" name="" id="" />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <div className="input-field">
                      <p>Firma</p>
                      <input type="text" name="" id="" />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <div className="input-field">
                      <p>Email</p>
                      <input type="text" name="" id="" />
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <a className="btn-yellow" onClick={modal}>
                      Jetzt registrieren
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src="/images/Phone-Card.png"
              className="w-100 mt100-s"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
