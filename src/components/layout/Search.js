import React, { useState } from "react";
import Alert from "./Alert";

const Search = ({ searchUser }) => {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert(true);
    } else {
      searchUser(text);
      setAlert(false);
    }
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container mx-auto">
        {alert && <Alert />}

        <h1 className={tailwind.title}>Pesquisar Usuários do GitHub</h1>
        <form onSubmit={handleSumbit}>
          <div className="flex">
            <div className="w-96 m-1">
              <input
                type="text"
                name="text"
                className={tailwind.searchInput}
                onChange={onChangeText}
                value={text}
              />
            </div>

            <div className="flex w-40 m-1">
              <input
                type="submit"
                value="Pesquisar"
                className={tailwind.button}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const tailwind = {
  title: "text-2xl mb-2 mt-3 text-gray-300",
  searchInput: "w-full rounded h-10 border-2 mb-6",
  button: "w-full h-10 rounded border-2 border-gray-700 bg-black text-gray-400",
};

export default Search;
