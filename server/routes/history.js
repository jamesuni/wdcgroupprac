app.get('/history', (req, res) => {
  res.sendFile(__dirname + '/history.html')
})
