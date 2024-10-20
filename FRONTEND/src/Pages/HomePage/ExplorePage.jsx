function ExplorePage() {
    const username =  localStorage.getItem('username')
  return (
  
    <>
      <div className="flex overflow-hidden flex-col  bg-white">
        <main className="flex flex-col  w-full text-black max-md:max-w-full">
          <h2 className="text-2xl font-bold pt-10 pl-10">
            Welcome <span className="text-blue-700">{username}!</span>
          </h2>
        </main>
      </div>
    </>
  );
}

export default ExplorePage;
