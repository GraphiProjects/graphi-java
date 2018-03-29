/*{
  "command": {
    "mutate savePost(params: $post) as post": {
      "return": "@model:Post.id",
      "query getPost(id: $id) @flatten": {}
    }
  },
  "data": {
    "postId": 1,
    "author": {
      "id": 102,
      "firstName": "Joe"
    }
  }
}*/
{
  `mutate post @using savePost(params = $newPost) {
    ...getPost(id = $id) {
      ...Post
      author @using getAuthor(id = $authorId) {
        id,
        firstName
      }
    }
  }`
}
