const Filter = ({filter,setFilter,setSort}) =>{
    return(
        <div className="filter">
            <h2>Filtrar: </h2>
            <div className="filter-options">
                <div>
                    <h3>Status:</h3>
                    <select name="" id="" value={filter} onChange={(e) =>setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completos</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>

                <div>
                    <h3>Ordem alfabetica</h3>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;