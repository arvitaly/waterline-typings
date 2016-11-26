declare namespace Waterline {
    interface Adapter {

    }
    type Connection = {
        adapter: string;
    }
    interface Config {
        adapters: { [index: string]: Adapter };
        connections: { [index: string]: Connection }
    }
    type Ontology = {
        collections: any;
    }
    interface Waterline {
        loadCollection(collection: CollectionClass): void;
        initialize: (config: Config, cb: (err: Error, ontology: Ontology) => any) => any;
        collections: any;
    }
    interface CollectionClass {
        (): Collection
    }
    export interface CollectionDefinitions {
        attributes?: { [index: string]: Attribute };
        connection?: string;
        identity?: string;
        tableName?: string;
        migrate?: "alter" | "drop" | "safe";
        autoPK?: boolean;
        autoCreatedAt?: boolean;
        autoUpdatedAt?: boolean;
    }
    export type Attributes = { [index: string]: Attribute };
    export type Attribute = string | StringAttribute | IntegerAttribute | ModelAttribute | DatetimeAttribute | CollectionAttribute;
    export type BaseAttribute = {
        type?: string;
        autoIncrement?: boolean;
        primaryKey?: boolean;
        unique?: boolean;
        required?: boolean;
    }
    export type CollectionAttribute = BaseAttribute & {
        collection: string;
        via: string;
    }
    export type StringAttribute = BaseAttribute & {
        type: 'string';
        default?: string;
    }
    export type IntegerAttribute = BaseAttribute & {
        type: 'integer';
        default?: number;
    }
    export type ModelAttribute = BaseAttribute & {
        model: string;
    }
    export type DatetimeAttribute = BaseAttribute & {
        type: 'datetime';
        default?: Date;
    }
    export interface Collection extends CollectionDefinitions {
        create: (model: any) => Promise<any>;
        update: (conditions: any, model: any) => Promise<Array<any>>;
        find: (model: any) => Promise<Array<any>>;
        connections: any; // TODO
        waterline: Waterline;
        adapter: any; // TODO
        defaults: any; // TODO
        hasSchema: any; // TODO
        migrate: any; // TODO
        adapterDictionary: any; // TODO
        pkFormat: any; // TODO
        syncable: any; // TODO
        registerConnection: any; // TODO
        teardown: any; // TODO
        define: any; // TODO
        definition: any; // TODO
        meta: any; // TODO
    }

}
declare interface WaterlineStatic {
    Collection: {
        extend: (params: Waterline.CollectionDefinitions) => Waterline.CollectionClass;
    }
    new (): Waterline.Waterline;
}
declare var Waterline: WaterlineStatic;
export = Waterline;
