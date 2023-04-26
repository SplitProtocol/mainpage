import React, { useEffect, useState } from 'react';


export function DesktopCard(props) {
    const { cardText, cardTitle, isOrientaionH, link } = props;

    return (
        <>
            <p className={isOrientaionH ?
              'fsize-24 text-start f-barlow-700 white ms-3 m-0 p-0 ws lh-sm':
              "fsize-4 text-start f-barlow-700 white ms-3 m-0 p-0 ws lh-sm"}
            >
              {cardTitle}
            </p>
            <p className={isOrientaionH ?
              'fsize-12 text-start f-barlow-400 white ms-3 mt-4':
              "fsize-2 text-start f-barlow-400 white ms-3 mt-5"}
            >
              {cardText}
            </p>
                {link ? (
                  <div className='d-flex justify-content-end position-absolute bottom-0 end-0 mb-3'>
                      <a
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        href={link}
                        target="_blank"
                        className={isOrientaionH ? 'p-0 m-0 f-roboto-400 fsize-3h': 'p-0 m-0 f-barlow-700 fw-bold'}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <div className='buttonConnectWallet col-6 d-flex align-items-center justify-content-center mx-3'>
                            {'Learn more'}
                        </div>
                      </a>
                  </div>
                ) : (
                  <div className='d-flex justify-content-end position-absolute bottom-0 end-0 mb-3'>
                    <div className='buttonConnectWallet col-6 d-flex align-items-center justify-content-center mx-3'>
                      <p
                        className={isOrientaionH ? 'p-0 m-0 f-roboto-400 fsize-3h': 'p-0 m-0 f-barlow-700 fw-bold'}>
                        {'Learn more'}
                      </p>
                    </div>
                  </div>
                )}
        </>
    )
}
