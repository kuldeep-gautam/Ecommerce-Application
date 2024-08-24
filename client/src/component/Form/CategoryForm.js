import React from 'react'

const CategoryForm = ({handleSubmit, value, setValue}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input type="text" className='form-control' placeholder='Enter new category' value={value} onChange={(e)=> setValue(e.target.value)
                    } />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default CategoryForm