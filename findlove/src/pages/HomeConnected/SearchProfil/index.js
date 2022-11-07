import React from "react";

import ConversationList from "../../../containers/ToggleChat";
import Chat from "../../../containers/ToggleMessage";

import "./searchProfil.scss";

function SearchProfil() {
  return (
    <>
      <div className="middle_headerConnected search">
        <Chat />
        <ConversationList />
      </div>
    </>
  );
}

export default SearchProfil;
