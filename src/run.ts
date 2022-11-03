import { TreeModel } from "./models/tree.model";



export async function run() {
    const tree = new TreeModel({ name: "First tree" })
    await tree.save();

    console.log(tree.name)

    const x = await TreeModel.find()

    console.log("MONGO DB found " + x[0].name)
}