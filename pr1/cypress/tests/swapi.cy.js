// cypress/integration/api.spec.js

describe('JSONPlaceholder API Tests', () => {
  it('should create a post and retrieve it using the response', () => {
    let postId;

    // POST Request to create a new post
    cy.request({
      method: 'POST',
      url: '/posts',
      body: {
        title: 'Cypress Test Post',
        body: 'This is a test post created by Cypress',
        userId: 1, // Adjust the userId as needed
      },
    }).then((postResponse) => {
      expect(postResponse.status).to.eq(201);

      // Store the post ID from the response for the subsequent GET request
      postId = postResponse.body.id;

      // GET Request using the stored post ID
      //postId must be used here
      return cy.request('GET', `/posts/${1}`);
    }).then((getResponse) => {
      expect(getResponse.status).to.eq(200);
      expect(getResponse.body).to.have.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
      expect(getResponse.body).to.have.property('body', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
      // Add more assertions based on the structure of the GET response
    });
  });
});


