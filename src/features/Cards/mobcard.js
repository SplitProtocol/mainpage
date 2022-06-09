import React, { useEffect, useState } from 'react';


export function MobCard(props) {
    const cardTitle = props.cardTitle
    const cardText = props.cardText
    const isButton = props.isButton
    return (
        <>
            <p className="fsize-24 text-start f-barlow-700 white ms-2 m-0 p-0 ws lh-sm">{cardTitle}</p>
            <p className="fsize-14 text-start f-barlow-400 white ms-2 mt-4 ws lh-sm">{cardText}</p>

            {isButton ? (
                <div className='d-flex justify-content-end position-absolute bottom-0 end-0 mb-3 me-2'>
                    <div className='buttonConnectWalletH d-flex align-items-center justify-content-center mx-3 '>
                        <p 
                            className='p-0 m-0 f-roboto-400'>
                                {'Learn more'}
                        </p>
                    </div>
                </div>
            ): null}
        </>
    )
}

