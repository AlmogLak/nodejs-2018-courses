"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_model_1 = require("./models/user.model");
const note_model_1 = require("./models/note.model");
const mongodb_1 = require("mongodb");
const NoteType = new graphql_1.GraphQLObjectType({ name: "Note",
    fields: () => {
        return {
            _id: { type: graphql_1.GraphQLID },
            note: { type: graphql_1.GraphQLString },
            comments: { type: graphql_1.GraphQLString },
            level: { type: graphql_1.GraphQLString }
        };
    } });
const UserType = new graphql_1.GraphQLObjectType({ name: "User",
    fields: () => {
        return {
            _id: { type: graphql_1.GraphQLID },
            firstName: { type: graphql_1.GraphQLString },
            lastName: { type: graphql_1.GraphQLString },
            address: { type: graphql_1.GraphQLString },
            activated: { type: graphql_1.GraphQLBoolean },
            notes: { type: new graphql_1.GraphQLList(NoteType) }
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
                address: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                activated: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) }
            },
            resolve(parent, args) {
                let user = new user_model_1.default({
                    _id: new mongodb_1.ObjectID(),
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
                userId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                note: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                comments: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                level: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    let note = new note_model_1.default({
                        _id: new mongodb_1.ObjectID(),
                        note: args.note,
                        comments: args.comments,
                        level: args.level,
                    });
                    console.log("note", note);
                    let user = user_model_1.default.findById(args.userId);
                    yield user_model_1.default.findOneAndUpdate({ _id: args.userId }, { $push: { notes: note } });
                    return note;
                });
            }
        }
    }
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
//# sourceMappingURL=schema.js.map