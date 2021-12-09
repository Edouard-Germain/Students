import {usestate} from ' react'
const Form =()=>{
    const [students, setStudents]= usestate([students])

    const handleSubmit= (e, value) => {
        e.preventDefault()
        setStudents(value)
    
        fetch('http://localhost:5000/movies', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }


    }

    return ( 
        <div>
        <form onSubmit={handleSubmit}>
        <input type="text" value="nouvel eleve" />
        <button type="submit">Nouvel eleve</button>
      </form>
      </div>
    )
}
export default Form