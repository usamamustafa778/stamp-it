import React from 'react'
import "./style.css"

function Footer() {
  return (
    <div className='footer container-fluid py-5 mt-5'>
        <div className="container text-white mt-5">
            <div className="row justify-content-between py-5 border-bottom">
                <div className="col-md-3">
                    <img src="/images/LogoFooter.png" alt="" />
                </div>
                <div className="col-md-5">
                    <div className="row justify-content-between">
                        <div className="col-md-6">
                            <h4 className='my-4'>Unternehmen</h4>
                            <p>Über uns</p>
                            <p>Impressum</p>
                            <p>Cookie-Einstellungen</p>
                            <p>Rechtliches</p>
                        </div>
                        <div className="col-md-6">
                            <h4 className='my-4'>Support</h4>
                            <p>Hilfe</p>
                            <p>Kontakt</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <p>© 2022, stamp it solutions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer