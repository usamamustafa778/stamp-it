import React from 'react'

function Download() {
  return (
    <div id="download" className='container-fluid py-5 px-4 mt-5'>
        <div className="row text-center flex-column align-items-center">
            <h1 className="text-red">Schon bald erhältlich!</h1>
            <p className='col-md-7'>stamp it, ein eigenkonzipiertes Stempelkarten- und Buchungssystem, wird bald für alle im App Store und bei Google Play erhältlich sein.</p>
            <div className="col-md-3">
                <div className="d-flex">
                    <div className="col-md-6">
                        <img src="/images/1626085457.png" className='w-100' alt="" />
                    </div>
                    <div className="col-md-6">
                        <img src="/images/app-store-de-data.png" className='w-100' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download