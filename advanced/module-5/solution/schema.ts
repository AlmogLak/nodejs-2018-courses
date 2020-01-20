import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLSchema, GraphQLBoolean } from "graphql";
import User from "./models/user.model";
import Note from "./models/note.model";
import { ObjectID } from "mongodb";

const NoteType = new GraphQLObjectType({name: "Note",
fields: () => { return {
    _id: {type: GraphQLID},
    note: {type: GraphQLString},
    comments: {type: GraphQLString},
    level: {type: GraphQLString}
}}});

const UserType = new GraphQLObjectType({name: "User",
fields: () => { return {
    _id: {type: GraphQLID},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    address: {type: GraphQLString},
    activated: {type: GraphQLBoolean},
    notes: {type: new GraphQLList(NoteType)}
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
                address: {type: new GraphQLNonNull(GraphQLString)},
                activated: {type: new GraphQLNonNull(GraphQLBoolean)}
            },
            resolve(parent, args) {
                let user = new User({
                    _id: new ObjectID(),
                    firstName: args.firstName,
                    lastName: args.lastName,
                    address: args.address,
                    activated: args.activated,
                    notes: []
                });
                return user.save();
            }
        },
        addNote: {
            type: NoteType,
            args: {
                userId: {type: new GraphQLNonNull(GraphQLID)},
                note: {type: new GraphQLNonNull(GraphQLString)},
                comments: {type: new GraphQLNonNull(GraphQLString)},
                level: {type: new GraphQLNonNull(GraphQLString)}
            },
            async resolve(parent, args) {
                let note = new Note({
                    _id: new ObjectID(),
                    note: args.note,
                    comments: args.comments,
                    level: args.level,
                });
                console.log("note", note);
                
                let user = User.findById(args.userId);
                await User.findOneAndUpdate({_id: args.userId}, {$push: {notes: note}});

                return note;
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
