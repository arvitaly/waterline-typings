import * as Waterline from 'waterline';
const waterline = new Waterline();
interface Model1 {
    name?: string
}
const model1Class = Waterline.Collection.extend({
    attributes: {},
    identity: "model1",
    autoCreatedAt: true,
    autoUpdatedAt: true,
    autoPK: true,
    connection: "con1",
    migrate: "alter",
    tableName: "t1"
});
waterline.loadCollection(model1Class);
interface Model1Collection extends Waterline.Collection {

}
const collections: {
    model1: Model1Collection
} = waterline.collections;

const m1: Model1 = collections.model1.create({
    name: "string"
});



