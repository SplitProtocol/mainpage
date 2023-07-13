import React from 'react';


export const MobCard = ({ cardText, cardTitle, isButton, link }) => {
    return (
        <>
            <p className="fsize-24 text-start f-barlow-700 white ms-2 m-0 p-0 ws lh-sm">{cardTitle}</p>
            <p className="fsize-14 text-start f-barlow-400 white ms-2 mt-4 ws lh-sm">{cardText}</p>

            {isButton ? (
                <div className='d-flex justify-content-end position-absolute bottom-0 end-0 mb-3 me-2'>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      referrerPolicy="no-referrer"
                      className='buttonConnectWalletH d-flex align-items-center justify-content-center mx-3'
                    >
                      <p
                        className='p-0 m-0 f-barlow-700 fsize-12'>
                        {'Learn more'}
                      </p>
                    </a>
                  ) : (
                    <div className='buttonConnectWalletH d-flex align-items-center justify-content-center mx-3'>
                      <p
                        className='p-0 m-0 f-barlow-700 fsize-12'>
                        {'Learn more'}
                      </p>
                    </div>
                  )}
                </div>
            ): null}
        </>
    )
}

