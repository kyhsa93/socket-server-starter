/**
 * http GET method test
 * @name get test
 * @route {GET} /get-test
 * @param {Object} request
 * @param {Object} response
 */
const app = (request, response) => response.status(200).send('success');
export default app;
