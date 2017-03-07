import gpl from 'graphql-tag';

export const addContentQuery = gpl`
	mutation addBlogQuery(
			$title :String	
			$mainImg :String
			$genre : String
			$comment : [String]
			$rating	: Int
			$info : String
			$status : String
			$author: String
			$authorId: Int
			){
				addBlog(
				title : $title	
				mainImg : $mainImg
				genre : $genre
				comment : $comment
				rating	: $rating
				info : $info
				status: $status
				author: $author
				authorId: $authorId
				)
				{
					title
				}
			}
`;
export const getBlogByTitle = gpl`
		query getBlogByTitle($title : String!){
		Blogs(title : $title){
		    title
		    description
		    info
		    mainImg
		    genre
		    rating
		    comment
		    author
		   
		}
	}
`;

export const getAllBlogQuery = gpl`{
				allBlogs{
				    title
				    description
				    info
				    mainImg
				    genre
				    rating
				    author
				    comment
				}
			}
`;

export const addNewCommentQuery = gpl`
	mutation addNewCommentQuery($title : String!, $comment : String!){
		addComment(title: $title, comment: $comment){
		    title
		    description
		    info
		    mainImg
		    genre
		    rating
		    comment
		  }
		  
		}
`;

export const addAuthorMutation = gpl`
	mutation addAuthor($name : String!, $age: Int, $city: String, $password : String, $status: String, $email : String){
		addAuthor(name: $name, age: $age, city : $city, password: $password, status: $status, email: $email){
			name
			email
			authorId
		}
	}
`;
export const loginQuery = gpl`
	query loginQuery($email : String, $password: String){
 		getLogin(email : $email, password : $password){
 			name
 		}
  	}
`;
export const getAuthorQuery = gpl`
	query getAuthorQuery($name: String, $city : String, $email: String){
		Author(email: $email, name : $name, city: $city){
			name 
			age 
			city 
			email 
			status
			authorId
		}
	}

`;

export const updateAuthorQuery = gpl`
		mutation updateAuthorQuery($name : String!, $age: Int, $city: String, $password : String, $status: String, $email : String){
		  updateAuthor(name: $name, age: $age, city : $city, password: $password, status: $status, email: $email){
		    name
			email
			authorId
		  }
		}
`;
