const Search = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className={tailwind.title}>Pesquisar Usuários do GitHub</h1>
        <form>
          <input type="text" name="text" className={tailwind.searchInput} />
          <input type="submit" value="Pesquisar" className={tailwind.button} />
        </form>
      </div>
    </>
  );
};

const tailwind = {
  title: "text-2xl mb-2 mt-3 text-black",
  searchInput: "w-full rounded h-10 border-2 mb-6",
  button:
    "w-full h-10 rounded-full border-2 border-gray-700 bg-black text-gray-400",
};

export default Search;
