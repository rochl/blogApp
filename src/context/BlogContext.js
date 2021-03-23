import createDataContext from './createDataContext'


const blogReducer = (state,action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state,{title:`Game Post #${state.length+1}`}];
            default:
                return state;
        case 'edit_blogpost':
        case 'delete_blogpost':

    }
}

const addBlogPost = () => {
    dispatch({type:'addblogpost'});
}

export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost},[])

