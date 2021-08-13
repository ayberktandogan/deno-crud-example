import { Model, DataTypes, v4 } from "../../../deps.ts";

export class User extends Model {
    static table = "users";
    static timestamps = true;

    static fields = {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            required: true,
        },
        email: {
            type: DataTypes.STRING,
            required: true,
        },
        username: {
            type: DataTypes.STRING,
            length: 25,
            required: true,
        },
        password: {
            type: DataTypes.STRING,
            required: true,
        },
    };

    static defaults = {
        id: v4.generate(),
    };
}
