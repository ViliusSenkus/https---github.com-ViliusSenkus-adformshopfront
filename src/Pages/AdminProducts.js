function AdminProducts(){

  let handleEdit = ()=>{
    console.log("Editing");
  }

  let handleDelete = ()=>{
    console.log("Deleting");
  }

  return(
    <>
    <table>
      <thead>
        <tr>
        <th>Picture</th>
        <th>#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr key="" id="" >
          {/* Cia reikalingas mapinimas */}
          <td spancol="6"></td>
          {/* Mapinimo pabaiga */}
          <td>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    Cia dar reikia prideti formas, galbut kaip modulini langa.
    </>
  )
}

export default AdminProducts