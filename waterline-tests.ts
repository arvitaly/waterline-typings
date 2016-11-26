import * as Waterline from ".";
const waterline = new Waterline();
interface IModel1 {
    name?: string;
}
const model1Class = Waterline.Collection.extend({
    attributes: {},
    autoCreatedAt: true,
    autoPK: true,
    autoUpdatedAt: true,
    connection: "con1",
    identity: "model1",
    migrate: "alter",
    tableName: "t1",
});
waterline.loadCollection(model1Class);
interface IModel1Collection extends Waterline.Collection {

}
const collections: {
    model1: IModel1Collection,
} = waterline.collections;

const m1: IModel1 = collections.model1.create({
    name: "string",
});
