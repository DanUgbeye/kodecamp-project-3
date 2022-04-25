import React from 'react';

const Card = ({name, username, email, phone, website, company, address}) => {
  return (
    <div className=' px-6 pb-6 max-w-[25rem] w-full rounded-md overflow-hidden bg-[#E2D0F0] text-[#76568A] shadow-lg shadow-black/10 mb-12 '>
        <h2 className=' sticky top-0 left-0 right-0 pt-3 text-4xl font-semibold  tracking-wide '>{name}</h2>

        { username && (
            <div className=" font-semibold text-sm pb-3 ">
                {`@${username}`}
            </div>
        )}

        <div className=" font-semibold  ">
            Email: <span className=' font-normal '>{email ? email : 'no input'}</span>
        </div>

        <div className=" font-semibold  ">
            Phone: <span className=' font-normal '>{phone}</span>
        </div>

        <div className=" font-semibold  ">
            Address: <span className=' font-normal '>{`${address.suite} ${address.street}, ${address.city}`}</span>
        </div>

        <div className=" font-semibold  ">
            Website: <span className=' font-normal '>{website}</span>
        </div>

        <div className=" font-semibold  ">
            Company: <span className=' font-normal '>{company.name}</span>
        </div>
    </div>
  )
}

export default Card;