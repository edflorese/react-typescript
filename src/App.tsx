//import BasicTypes from "./typescript/BasicTypes"

// import Counter from "./componentes/Counter"
import LoginPage from "./componentes/LoginPage"
import { AuthProvides } from "./context/AuthContext"

// import BasicFuntions from "./typescript/BasicFuntions"

// //import BasicTypes from "./typescript/BasicTypes"

function App() {

  return (
    <AuthProvides>
      <div className="flex flex-col justify-center items-center h-svh">
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFuntions /> */}
      {/* <Counter /> */}
      <LoginPage />
    </div>
    </AuthProvides>
      
    
  )
}

export default App
