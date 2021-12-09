import  {useEffect,useState} from 'react'

const List = () => {
    const [sutdentsList,setStudentsList]= useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/students')
          .then(response => response.json())
          .then(data => setStudentsList(data))
      }, [])

    if (sutdentsList === null){
        return null
    } else {
    return (
        <div>
            {sutdentsList.map(student => (
                <li>{student.name}</li>
            ))}
        </div>
        )
    } 
}
export default List