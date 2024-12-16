import { db } from "./data";

export const resolvers = {
    Query: {
        weather: async (_, param) => {
            return [db.find((item) => item.zip == param.data.zip)];
        },
    },
    Mutation: {
        weather: async (_, param) => {
            return [db.find((item) => item.zip == param.data.zip)];
        },
    },
};
