
function List(){
    const items = [{id:1,name:'Apple'},{id:2,name:'Grape'},{id:3,name:'Orange'}]
  return (
    <div>
        <ol>
            {
                items.map((item)=><li key={item.id}>{item.name}</li>)
            }
        </ol>
    </div>
  )
}

export default List;