//{products}: destructuring
export function List({ products }) {
    return (
        <ul>
            {
                products.map(products =>
                    <>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p class="card-text">{products.title}</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        
                    </>

                )}
        </ul>
    )
}