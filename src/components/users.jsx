import React, { useState, useEffect } from 'react';
import Card from './card';

const Users = () => {

    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [  errorMessage, setErrorMessage] = useState('');
    
    async function fetchData() {
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (res.status === 200) {
          const dat = await res.json();
          const data = await JSON.parse(JSON.stringify(dat));
          if(data) {
            setUsers(data);
            setLoading(false);
          }
      }
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }

    useEffect(() => {
      fetchData()
    }, []);

  return (
    <div className=' flex flex-col items-center md:grid md:grid-cols-2 md:place-items-center gap-8 '>

      { 
        loading && (
          <div className={ " absolute top-[50%] translate-y-[-50%] w-full max-w-[80vw] grid place-items-center text-purple-200 text-3xl font-semibold " }>
            loading...
          </div>
        )
      }

      { 
        ( !loading && errorMessage ) && (
          <div className={ " absolute top-[50%] translate-y-[-50%] w-full max-w-[20rem] mx-8 flex border-solid border-2 border-red-500 rounded-md py-[3rem] place-items-center text-red-500 text-2xl font-semibold " }>
            <span className=' text-[3rem] w-[30%] grid place-items-center'>!</span>
            <div className=' w-fit grid place-items-center px-4 '>{errorMessage}</div>
          </div>
        )
      }

      {
        ( !loading && !errorMessage ) && (
          users.map(({ id, name, username, email, phone, website, company, address }) => (
            <Card key={id} name={name} username={username} email={email} phone={phone} website={website} company={company} address={address} />
          ))
        )
      }

    </div>
  )
}

export default Users;