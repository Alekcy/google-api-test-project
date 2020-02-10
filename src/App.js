import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import { Search, AddressBlock } from "./components";
import { store } from "./store/store";

function App() {
    const globalState = useContext(store);
    console.log(globalState.state.addressStore)
    return (
        <Container fixed>
            <Search />
            {globalState.state.addressStore && <AddressBlock/>}
        </Container>
    );
}

export default App;
