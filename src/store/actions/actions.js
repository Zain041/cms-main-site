import {DAILY_INCOME , FETCH_POST , UPDATE_POST , DELETE_POST} from './type'

import {db} from '../firebase'
const blogs = db.collection("blogs");
// export function addPost(post) {
// 	console.log(post)
//     return function (dispatch) {
//         posts.add(post).then(() => {
//             dispatch({
//                 type: DAILY_INCOME,
// 				payload: post,
				
//             });
//             dispatch(fetchPosts(post.uid));
//         });
//     };
// }
// export function deletePost(postId ,userid) {

	

// 	return function (dispatch) {
// 		posts
// 			.doc(postId)
// 			.delete()
// 			.then(() => {
// 				dispatch({
// 					type: DELETE_POST,
// 					payload: postId,
// 				});
// 				dispatch(fetchPosts(userid));
// 			});
// 	};
// }
// export function editPost(postId, post) {
// 	return function (dispatch) {
// 		// console.log(postId);
// 		console.log(postId);
//              posts
// 			.doc(postId)
// 			.update(post)
// 			.then(() => {
// 				dispatch({
// 					type: UPDATE_POST,
// 					payload: post,
// 				});
// 				dispatch(fetchPosts(post.userid));
// 			});
// 	};
// }


export const fetchPosts=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		blogs.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_POST,
                payload: data,
            });
        });
    // };
}  