import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schema";

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

const allowCors = (fn) => async (req, res) => {
    res.setHeader("Allow", "POST");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    if (req.method == "OPTIONS") {
        res.status(200).end();
    }

    return await fn(req, res);
};

export default allowCors(handler);
