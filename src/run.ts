import { TreeModel } from "./models/tree.model";



export async function initialDbRun() {
    const tree1 = new TreeModel({ name: "tree1" })
    const tree2 = new TreeModel({ name: "tree2" })
    const tree3 = new TreeModel({ name: "tree3" })
    await TreeModel.bulkSave([tree1, tree2, tree3])

}