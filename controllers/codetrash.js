// routes IDUC

// app.get("/", (req, res) => {
//     res.send("Hello World")
//     })
// //INDEX
// app.get("/products", async (req, res) => {
//     try {
//        res.status(200).json(await Product.find({}))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// //CREATE
// app.post("/products", async (req, res) => {
//     try {
//         res.status(200).json(await Product.create(req.body))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// //Delete
// app.delete("/products/:id", async (req, res) => {
//     try {
//         res.status(200).json(await Product.findByIdAndRemove(req.params.id))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// //Update
// app.put("/products/:id", async (req, res) => {
//     try {
//         res.status(200).json(await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })