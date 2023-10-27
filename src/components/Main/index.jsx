import { useState } from "react"

const Main =() =>{
    const[entrada, setEntrada] = useState()
    const[saida, setSaida] = useState()
    const conta = () => {
        return entrada - saida
    }

    console.log(entrada)
    return(
        <div>
        <div className="row">
            <div className="col-md-4">
            <div className="card">
             <div className="card-body">
            <h5 className="card-title">Entrada</h5>
            <p className="card-text">{entrada}</p>
            
             </div>
       </div>
            </div>
            <div className="col-md-4">
            <div className="card">
             <div className="card-body">
            <h5 className="card-title">Saida</h5>
            <p className="card-text">{saida}</p>
            
             </div>
       </div>
            </div>
            <div className="col-md-4">
            <div className="card">
             <div className="card-body">
            <h5 className="card-title">Saldo</h5>
            <p className="card-text">{conta()}</p>
            
             </div>
       </div>
            </div>
           
        </div>
            <div className="row">
                <div className="col-md-6 d-flex">
                <input onChange={e => setEntrada(e.target.value)} type="number"  className="form-control "  placeholder="Entrada" /> <button className="btn btn-success">Ok</button>
                </div>
                <div className="col-md-6 d-flex">
                <input onChange={e => setSaida(e.target.value)} type="number" className="form-control" placeholder="saidas" /> <button className="btn btn-success">Ok</button>
                </div>
            </div>
        </div>
    )
}
export default Main