import { useEffect, useState } from "react"
import { Footer, Header } from "../Components/Layout"
import { menuItemModel } from "../Interfaces";
import { Home, MenuItemDetails, NotFound } from "../Pages";
import { Route, Routes } from "react-router-dom";



function App() {


  return (
    <>
      <div>
        <Header />
        <div className="pb-5">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menuItemDetails/:menuItemId" element={<MenuItemDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
