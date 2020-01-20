"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_model_1 = require("./models/user.model");
const mongodb_1 = require("mongodb");
const UserType = new graphql_1.GraphQLObjectType({ name: "User",
    fields: () => {
        return {
            _id: { type: graphql_1.GraphQLID },
            firstName: { type: graphql_1.GraphQLString },
            lastName: { type: graphql_1.GraphQLString },
            address: { type: graphql_1.GraphQLString }
        };
    } });
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        allUsers: {
            type: new graphql_1.GraphQLList(UserType),
            args: {},
            resolve(parent, args) {
                return user_model_1.default.find({});
            }
        },
        users: {
            type: UserType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return user_model_1.default.findById(args.id);
            }
        }
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                address: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve(parent, args) {
                let user = new user_model_1.default({
                    _id: new mongodb_1.ObjectID(),
                    firstName: args.firstName,
                    lastName: args.lastName,
                    address: args.address,
                });
                return user.save();
            }
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
//# sourceMappingURL=schema.js.map