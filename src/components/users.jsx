import React, { useState, useEffect } from 'react';
import Card from './card';

const Users = () => {

    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    async function fetchData() {
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (res.status === 200) {
          const dat = await res.json();
          const data = await JSON.parse(JSON.stringify(dat));
          // handle data
          if(data) {
            // console.log(data)
            setUsers(data);
            setLoading(false);
          }
      }
      } catch (error) {
        console.log('error  : ' + error)
      }
    }

    useEffect(() => {
      fetchData()
    }, []);

    // useEffect(() => {
    //   console.log(users + "users")
    // }, [ users ]);

    // let egUsers = [
    //   {
    //     id: 1,
    //     name: 'dan',
    //     username: 'dee',
    //     email: 'ug@g.com',
    //     address: {
    //       suite: 'suite 88',
    //       street: 'luke street',
    //       city: 'calabar'
    //     },
    //     phone: 'none',
    //     website: 'www.bullshit.com',
    //     company: {
    //       name: 'craziers'
    //     }
    //   },

    //   {
    //     id: 2,
    //     name: 'daniel',
    //     username: 'dee',
    //     email: 'ug@g.com',
    //     address: {
    //       suite: 'suite 88',
    //       street: 'luke street',
    //       city: 'calabar'
    //     },
    //     phone: 'none',
    //     website: 'www.bullshit.com',
    //     company: {
    //       name: 'craziers'
    //     }
    //   }
    // ]


  return (
    <div className=' flex flex-col items-center'>

      { 
        loading && (
          <div className={ " w-full pt-[10rem] grid place-items-center text-purple-200 text-3xl font-semibold " }>
            loading...
          </div>
        )
      }

      {
        ( !loading ) && (
          users.map(({ id, name, username, email, phone, website, company, address }) => (
            <Card key={id} name={name} username={username} email={email} phone={phone} website={website} company={company} address={address} />
          ))
        )
      }

      

    </div>
  )
}

export default Users;