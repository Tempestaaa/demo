import {} from "antd"
import { Pagination } from "antd"
import React from "react";
import './App.css';
import AppHeader from "./Components/Header";
import PageContent from "./Components/PageConent";
// import AppFooter from "./Components/Footer";

// import InfiniteScroll from "react-infinite-scroll-component";


function App() {
  // const App = () => <Pagination defaultCurrent={1} total={50} />;
  
  return (
    
    <div className="App"> 
      <AppHeader />
      <PageContent />
      {/* <AppFooter /> */}
      <Pagination defaultCurrent={1 } total={500} style={{
        display: 'flex', 
        justifyContent: 'center',
      }}/>
    </div>
  );
}


export default App;
