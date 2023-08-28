export function MobFormH() {
    return (
        <>
            <div className='p-0 m-0 ps-1 pe-4 mt-1'>
            <p className='text-start white fsize-24 m-0 p-0 ms-0 f-barlow-700'>Beta is live!</p>
            <p className='text-start white fsize-16 m-0 p-0 ms-0 f-barlow-400'>subscribe to our social</p>

            <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-2'>
              <svg className='col-2 m-0 p-0' width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.9698 2.93563C36.2503 0.979486 34.5272 -0.564513 32.9158 0.199132L0.82084 15.4089C-0.334736 15.9565 -0.250209 17.8458 0.948301 18.2577L7.56708 20.5328C8.83031 20.967 10.1982 20.7425 11.3013 19.9199L26.2237 8.79209C26.6737 8.45652 27.1642 9.14712 26.7797 9.57496L16.0383 21.5284C14.9963 22.688 15.2031 24.6528 16.4564 25.5012L28.4827 33.6413C29.8315 34.5543 31.5668 33.6371 31.8191 31.8778L35.9698 2.93563Z" fill="white"/>
              </svg>
              {/* <input className='input-social col-10 f-barlow-400 h-6h' placeholder='youre @nickname'
                      id='tgnick' value={tgNick} onChange={(e) => setTgNick(e.target.value)}>
              </input> */}
              <div className='col-10'>
                <a href="https://t.me/split_protocol" target="_blank" className='buttonSocialH w-100  px-2 d-flex align-items-center justify-content-center'>
                  <p className='whitegrey p-0 m-0 f-barlow-400'>Announcements</p>
                </a>
              </div>
            </div>

            <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-2'>
              <svg className='col-2 m-0 p-0' width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2998 32C7.14053 32 3.26337 30.6909 0 28.4322C2.77071 28.6262 7.66038 28.1616 10.7017 25.0223C6.12653 24.7951 4.06319 20.998 3.79406 19.3753C4.18281 19.5375 6.03682 19.7323 7.08344 19.2779C1.82044 17.8499 1.01305 12.8519 1.19247 11.3266C2.17928 12.073 3.85387 12.3327 4.51174 12.2677C-0.392409 8.47059 1.37189 2.75862 2.23909 1.52535C5.75849 6.80162 11.033 9.76497 17.5582 9.9298C17.4352 9.34589 17.3702 8.73798 17.3702 8.11359C17.3702 3.63258 20.7172 0 24.846 0C27.0033 0 28.9471 0.991658 30.3116 2.57786C31.7532 2.21232 33.9227 1.35662 34.9833 0.616633C34.4487 2.69371 32.7843 4.42642 31.7776 5.06863C31.7859 5.09048 31.7694 5.04669 31.7776 5.06863C32.6619 4.92388 35.0547 4.42625 36 3.73225C35.5325 4.89913 33.768 6.83927 32.3199 7.92546C32.5893 20.7834 23.4983 32 11.2998 32Z" fill="white"/>
              </svg>
              <div className='col-10'>
                <a href="https://twitter.com/splitprotocol" target="_blank" className='buttonSocialH w-100  px-2 d-flex align-items-center justify-content-center'>
                  <p className='whitegrey p-0 m-0 f-barlow-400'>Split Twitter</p>
                </a>
              </div>
              {/* <input className='input-social col-10 f-barlow-400 h-6h' placeholder='youre @nickname'
                      id='twnick' value={twNick} onChange={(e) => setTwNick(e.target.value)}
              >
              </input> */}
            </div>

            {/* <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-3'>
              <svg className='col-2 m-0 p-0' width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2998 32C7.14053 32 3.26337 30.6909 0 28.4322C2.77071 28.6262 7.66038 28.1616 10.7017 25.0223C6.12653 24.7951 4.06319 20.998 3.79406 19.3753C4.18281 19.5375 6.03682 19.7323 7.08344 19.2779C1.82044 17.8499 1.01305 12.8519 1.19247 11.3266C2.17928 12.073 3.85387 12.3327 4.51174 12.2677C-0.392409 8.47059 1.37189 2.75862 2.23909 1.52535C5.75849 6.80162 11.033 9.76497 17.5582 9.9298C17.4352 9.34589 17.3702 8.73798 17.3702 8.11359C17.3702 3.63258 20.7172 0 24.846 0C27.0033 0 28.9471 0.991658 30.3116 2.57786C31.7532 2.21232 33.9227 1.35662 34.9833 0.616633C34.4487 2.69371 32.7843 4.42642 31.7776 5.06863C31.7859 5.09048 31.7694 5.04669 31.7776 5.06863C32.6619 4.92388 35.0547 4.42625 36 3.73225C35.5325 4.89913 33.768 6.83927 32.3199 7.92546C32.5893 20.7834 23.4983 32 11.2998 32Z" fill="white"/>
              </svg>
              <input className='input-social col-10 f-barlow-400 h-6h' placeholder='youre @nickname'
                id='rtwnick' value={rtwNick} onChange={(e) => setRtwNick(e.target.value)}
              >
              </input>
            </div> */}

            <div className='row d-flex align-items-center justify-content-start m-0 p-0 mt-2 '>
              <svg className='col-2 m-0 p-0 ' width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.4955 2.34496C28.165 1.24949 25.6733 0.453301 23.0684 0C22.7483 0.581155 22.3746 1.3628 22.117 1.98464C19.3477 1.56621 16.6039 1.56621 13.8857 1.98464C13.6281 1.3628 13.2458 0.581155 12.9231 0C10.3152 0.453301 7.82063 1.25239 5.49029 2.35077C0.789966 9.48735 -0.484217 16.4467 0.152875 23.3072C3.27038 25.6464 6.29161 27.0672 9.26186 27.9971C9.99523 26.983 10.6493 25.905 11.2128 24.7688C10.1396 24.3591 9.1118 23.8535 8.14058 23.2665C8.39825 23.0748 8.65026 22.8742 8.89377 22.668C14.8174 25.4516 21.2533 25.4516 27.1062 22.668C27.3524 22.8742 27.6045 23.0748 27.8593 23.2665C26.8852 23.8563 25.8546 24.362 24.7814 24.7717C25.3449 25.905 25.9961 26.9859 26.7323 28C29.7054 27.0702 32.7295 25.6493 35.847 23.3072C36.5946 15.3541 34.57 8.4587 30.4955 2.34496ZM12.0198 19.0881C10.2416 19.0881 8.78334 17.4201 8.78334 15.389C8.78334 13.3579 10.2104 11.6871 12.0198 11.6871C13.8291 11.6871 15.2873 13.3549 15.2562 15.389C15.2591 17.4201 13.8291 19.0881 12.0198 19.0881ZM23.9802 19.0881C22.2019 19.0881 20.7436 17.4201 20.7436 15.389C20.7436 13.3579 22.1708 11.6871 23.9802 11.6871C25.7894 11.6871 27.2477 13.3549 27.2165 15.389C27.2165 17.4201 25.7894 19.0881 23.9802 19.0881Z" fill="white"/>
              </svg>
              <div className='col-10'>
                <a href="https://discord.com/invite/Qvn4t7x6VY" target="_blank" className='buttonSocialH w-100  px-2 d-flex align-items-center justify-content-center'>
                  <p className='whitegrey p-0 m-0 f-barlow-400'>Community</p>
                </a>
              </div>
              {/* <input className='input-social col-10 f-barlow-400 h-6h' placeholder='youre @nickname'
                id='dscnick' value={dscNick} onChange={(e) => setDscNick(e.target.value)}
              >
              </input> */}
            </div>
            {/* <div className='buttonJoin d-flex align-items-center justify-content-center h-6h   m-0 p-0 mt-2 ms-2'>
                <p className='p-0 m-0 f-barlow-500'>{'Join'}</p>
            </div> */}
          </div>
        </>
    )
}
