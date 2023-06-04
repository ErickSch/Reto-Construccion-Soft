import {useState} from "react";
import tablaABC from "./styles/TablaABC.css";
import Ver from "./Ver";
export default function TablaABC() {
    // no se como me llegue la fechNac, si es Date cambiar a string supongo pero supondre que como string.
    const ejemploObjeto = 
        {nomAp: "Sebastian Ramirez Cordero", 
        fechNac: "08/09/2002", 
        pais: "Mexico", 
        Estado: "Nuevo Leon", 
        lvl: 34, 
        topScore: 250, 
        user: "sebramirez", 
        cursosTomados: 23,
        Managerial: false,
        cursos: [
            {nombreCurso: "Curso1", descripcion: "Es un curso que me invente como ejemplo y asi etc."},
            {nombreCurso: "Curso2", descripcion: "Es otro curso que me invente como ejemplo y asi etc."}
        ],
        unidad: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi magnam voluptas blanditiis. Rerum hic vitae distinctio dolore quisquam optio id, ea, velit at modi aliquid possimus porro laboriosam iusto.",
        div: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi magnam voluptas blanditiis. Rerum hic vitae distinctio dolore quisquam optio id, ea, velit at modi aliquid possimus porro laboriosam iusto.",
        perfil: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi magnam voluptas blanditiis. Rerum hic vitae distinctio dolore quisquam optio id, ea, velit at modi aliquid possimus porro laboriosam iusto.",
        origenCand: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi magnam voluptas blanditiis. Rerum hic vitae distinctio dolore quisquam optio id, ea, velit at modi aliquid possimus porro laboriosam iusto.",
        posIngreso: "Gerente idk",
        posActiva: "Regional Manager Dunder Mifflin",
        Clerical: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi magnam voluptas blanditiis. Rerum hic vitae distinctio dolore quisquam optio id, ea, velit at modi aliquid possimus porro laboriosam iusto.",
        escuela: "Tec de Monterrey",
        descTitulo: "ITC ingeniero bla bla bla",
        grad: false,
        esp: "No se que es Type",
        Estruc3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi magnam voluptas blanditiis. Rerum hic vitae distinctio dolore quisquam optio id, ea, velit at modi aliquid possimus porro laboriosam iusto.",
        Estruc4: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi magnam voluptas blanditiis. Rerum hic vitae distinctio dolore quisquam optio id, ea, velit at modi aliquid possimus porro laboriosam iusto.",
        Estruc5: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi magnam voluptas blanditiis. Rerum hic vitae distinctio dolore quisquam optio id, ea, velit at modi aliquid possimus porro laboriosam iusto.",
        rot: false,
        cantRot: 34
    };
    // estoy suponiendo que el API me va a mandar un arreglo de objetos como el de arriba pero obvio puede que cambie.
    const responseAPI = [];
    let id=0;
    responseAPI.push(ejemploObjeto);
    const ejemploObjeto2 = {...ejemploObjeto, nomAp: "idasjfklajfdlsajf"}
    const [selectedUser, setSelectedUser] = useState(null);
    responseAPI.push(ejemploObjeto);
    // es index 2
    responseAPI.push(ejemploObjeto2);
    responseAPI.push(ejemploObjeto);
    responseAPI.push(ejemploObjeto);
    responseAPI.push(ejemploObjeto);
    responseAPI.push(ejemploObjeto);
    responseAPI.push(ejemploObjeto);
    function renderView(index = null) {
        setSelectedUser(responseAPI[index])
        setShow(!show);
    }
    const [show, setShow] = useState(false);
    if (show === true) {
        return (
            // pasar el objeto que obtuve del API como prop
            <Ver user={selectedUser} close={renderView} id={id}/>
        )
    }
    return (
        <div className="container">
            <table className="TablaABC">
                <thead>
                    <tr>
                        {/* info personal general */}
                        <th style={{width:"13em"}}>nombre y Apellido(nomAp)</th>
                        <th style={{width:"4em", paddingLeft:"0.3em", paddingRight:"1.2em"}}>Fecha de nacimiento</th>
                        <th style={{width:"3em"}}>pais</th>
                        <th style={{width:"4em"}}>Estado</th>
                        {/* gamestats */}
                        <th>Nivel(lvl)</th>
                        <th>topScore</th>
                        {/* tabla users */}
                        <th>user</th>
                        <th style={{width:"4em"}}>Cursos Tomados</th>
                        <th style={{width:"4.5em", paddingLeft:"0.3em"}}>Managerial</th>
                        <th style={{width: "10em"}}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {responseAPI.map((item, index) => (
                        <tr key={index}>
                            <td style={{padding:"0.5em", textAlign:"center"}}>{item.nomAp}</td>
                            <td style={{padding:"0.5em", textAlign:"center"}}>{item.fechNac}</td>
                            <td style={{padding:"0.5em", textAlign:"center"}}>{item.pais}</td>
                            <td style={{padding:"0.5em", textAlign:"center"}}>{item.Estado}</td>
                            <td style={{padding:"0.5em", textAlign:"center"}}>{item.lvl}</td>
                            <td style={{padding:"0.5em", textAlign:"center"}}>{item.topScore}</td>
                            <td style={{padding:"0.5em", textAlign:"center"}}>{item.user}</td>
                            <td style={{padding:"0.5em", textAlign:"center"}}>{item.cursosTomados}</td>
                            <td style={{padding:"0.5em", textAlign:"center"}}>{item.Managerial.toString()}</td>

                        
                            {/* hacer render view con el id para mostrar cada cosa del item con ese id, en este caso id solo es el index en la tabla */}
                            {/* en chrome me sale el border de esto muy grande y en firefox no sale para nada esta muy raro */}
                            <td className="buttons"><div className="buttonsContainer"><button>Editar</button><button onClick={() => renderView(index)}>Ver</button><button>Eliminar</button></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        
    )
}