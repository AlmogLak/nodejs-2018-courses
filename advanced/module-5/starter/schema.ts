import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLSchema } from "graphql";
import User from "./models/user.model";
import { ObjectID } from "mongodb";

const UserType = new GraphQLObjectType({name: "User",
fields: () => { return {
    _id: {type: GraphQLID},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    address: {type: GraphQLString}
    // TODO: Add schema of notes here
}}});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        allUsers: {
            type: new GraphQLList(UserType),
            args: {},
            resolve(parent, args) {
                return User.find({});
            }
        },
        users: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return User.findById(args.id);
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                address: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let user = new User({
                    _id: new ObjectID(),
                    firstName: args.firstName,
                    lastName: args.lastName,
                    address: args.address,
                });
                return user.save();
            }
        }
        // TODO: Add mutation of adding note here (by _id)
    }
})

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
