import { User } from "../../db/models/User.ts";
import { Model } from "../../../deps.ts";

export function getUser(username: string): Promise<Model | Model[]> {
    /**
     *
     * @param username - The first input string
     * @returns Returns Promise for get method
     *
     */
    return User.where("username", username).limit(1).get();
}

export function createUser(username: string, password: string): Promise<Model | Model[]> {
    /**
     * Takes password as hashed, don't send plain text
     *
     * @param username - The first input string
     * @param password - The second input string
     * @returns Returns Promise for create method
     *
     */
    return User.create({ username, password });
}

export function updateUser(username: string, password: string): Promise<Model | Model[]> {
    /**
     * Takes password as hashed, don't send plain text
     *
     * @param username - The first input string
     * @param password - The second input string
     * @returns Returns Promise for update method
     *
     */
    return User.where("username", username).update({ username, password });
}

export function deleteUser(username: string): Promise<Model | Model[]> {
    /**
     *
     * @param username - The first input string
     * @returns Returns Promise for delete method
     *
     */
    return User.where("username", username).delete();
}
