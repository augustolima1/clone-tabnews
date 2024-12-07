async function status(request, response) {
  return response.status(200).json({
    teste: "123",
  });
}

export default status;
