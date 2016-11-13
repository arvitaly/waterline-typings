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
    type Ontology<T> = {
        collections: T;
    }
    interface Waterline<T> {
        loadCollection(collection: Collection);
        initialize: (config: Config, cb: (err: Error, ontology: Ontology<T>) => any) => any;
        collections: T;
    }
    interface WaterlineStatic {
        Collection: {
            extend: (params: Collection) => Collection;
        }
        new <T>(): Waterline<T>;
    }
    export type BaseAttribute = {
        type?: string;
        autoIncrement?: boolean;
        primaryKey?: boolean;
        unique?: boolean;
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
    export type Attribute = string | StringAttribute | IntegerAttribute | ModelAttribute | DatetimeAttribute;
    export type Attributes = { [index: string]: Attribute };

    export interface BaseModel<T> {
        create: (model: T) => Promise<T>;
        update: (conditions: T, model: T) => Promise<Array<T>>;
        find: (model: T) => Promise<Array<T>>;
    }
    export interface Model<T> extends BaseModel<T> {
        connections
        waterline: Waterline<any>;
        adapter
        defaults
        _cast
        _schema
        _validator
        _callbacks
        _instanceMethods
        hasSchema
        migrate
        _model
        _transformer
        adapterDictionary
        pkFormat
        syncable
        registerConnection
        teardown
        define

        findOneById
        findOneByIdIn
        findOneByIdLike
        findById
        findByIdIn
        findByIdLike
        countById
        countByIdIn
        countByIdLike
        idStartsWith
        idContains
        idEndsWith
        findOneByCreatedAt
        findOneByCreatedAtIn
        findOneByCreatedAtLike
        findByCreatedAt
        findByCreatedAtIn
        findByCreatedAtLike

        countByCreatedAt
        countByCreatedAtIn
        countByCreatedAtLike
        createdAtStartsWith
        createdAtContains
        createdAtEndsWith
        findOneByUpdatedAt
        findOneByUpdatedAtIn
        findOneByUpdatedAtLike
        findByUpdatedAt
        findByUpdatedAtIn
        findByUpdatedAtLike
        countByUpdatedAt
        countByUpdatedAtIn
        countByUpdatedAtLike
        updatedAtStartsWith
        updatedAtContains
        updatedAtEndsWith
        definition
        meta

        _attributes: Attributes;
    }
    type CollectionAttribute = Attribute;
    export type Collection = {
        attributes?: { [index: string]: CollectionAttribute };
        connection?: string;
        identity?: string;
        tableName?: string;
        migrate?: "alter" | "drop" | "safe";
        autoPK?: boolean;
        autoCreatedAt?: Date;
        autoUpdatedAt?: Date;
    }
}
declare module 'waterline' {
    var waterline: Waterline.WaterlineStatic;
    export = waterline;
}