function AdminOrders() {

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
            <th>Date</th> {/* reikia spaninti eilutes per produktu kieki */}
            <th>Product</th>
            <th>Amount</th>
            <th>PricePaid</th>
            <th>UserName</th>
            <th>Sum</th> {/* reikia spaninti eilutes per produktu kieki, taip pat nurodyti unpaid jeigu neapmoketas */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr key="" id="">
            {/* Cia reikalingas mapinimas */}
            <td colSpan="7">smth</td>
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

export default AdminOrders