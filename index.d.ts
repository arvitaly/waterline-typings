declare namespace Waterline {
    interface Waterline {

    }
    export type BaseAttribute = {
        autoIncrement: boolean;
        primaryKey: boolean;
        unique: boolean;
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
    export type Model = {
        _attributes: Attributes;
    }
}
declare module 'waterline' {
    var waterline: Waterline.Waterline;
    export = waterline;
}