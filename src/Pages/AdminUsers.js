function AdminUsers() {

  let handleEdit = () => {
    console.log("Editing");
  }

  let handleDelete = () => {
    console.log("Deleting");
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Password</th>
            <th>Role</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr key="" id="" >
            {/* Cia reikalingas mapinimas */}
            <td colSpan="5"></td>
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

export default AdminUsers