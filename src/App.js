
import Forms from "./components/Forms";
import Navbar from "./components/Navbar";


function App(props) {
    return ( 
        <>
            <Navbar/>
            <div className="container">
                <h1> Car Inventory </h1> 
                <Forms/>
             </div>
        </>
    )
};

export default App;
