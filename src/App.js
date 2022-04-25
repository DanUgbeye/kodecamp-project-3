import Users from "./components/users";

// let deepColor = '#76568A' ;
// let lightColor = '#DBC1ED  bg-[#DBC1ED]' ;

function App() {
  return (
    <main className=" px-6 pb-12 bg-[#76568A] min-h-[100vh] " >
      <div className=" max-w-2xl min-w-[20rem] flex flex-col self-center md:mx-auto max-h-fit  overflow-hidden ">
        <h1 className=" text-center text-4xl font-semibold pt-4 mb-8 text-[#DBC1ED]  tracking-wide ">
          USERS
        </h1>

        <Users />
        
      </div>
    </main>
  );
}

export default App;
