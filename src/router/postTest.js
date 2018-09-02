/**
 * http POST method test
 * @name post test
 * @route {POST} /post-test
 * @param {Object} request
 * @param {Object} response
 */
export default (request, response) => {
  if (request.body) return response.status(200).send(request.body);
  return response.status(400);
};
