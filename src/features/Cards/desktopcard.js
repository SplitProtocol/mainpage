import React, { useEffect, useState } from 'react';


export function DesktopCard(props) {
    const isOrientaionH = props.isOrientaionH
    const cardTitle = props.cardTitle
    const cardText = props.cardText
    return (
        <>
            <p className={isOrientaionH ?
              'fsize-32 text-start f-barlow-700 white ms-3 m-0 p-0 ws lh-sm':
              "fsize-4 text-start f-barlow-700 white ms-3 m-0 p-0 ws lh-sm"}
            >
              {cardTitle}
            </p>
            <p className={isOrientaionH ?
              'fsize-12 text-start f-barlow-400 white ms-3 mt-5':
              "fsize-2 text-start f-barlow-400 white ms-3 mt-5"}
            >
              {cardText}
            </p>
            <div className='d-flex justify-content-end position-absolute bottom-0 end-0 mb-3'>
              <div className='buttonConnectWallet col-6 d-flex align-items-center justify-content-center mx-3'>
                <p 
                  className={isOrientaionH ? 'p-0 m-0 f-roboto-400 fsize-3h': 'p-0 m-0 f-roboto-400'}>
                  {'Learn more'}
                </p>
              </div>
            </div>
        </>
    )
}