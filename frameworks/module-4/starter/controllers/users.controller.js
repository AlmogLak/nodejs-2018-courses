"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const persistance_service_1 = require("../services/persistance.service");
const user_model_1 = require("../models/user.model");
const mongodb_1 = require("mongodb");
const note_model_1 = require("../models/note.model");
class UsersController {
    constructor() {
        this.list = this.list.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        // TODO: Replace to MongoDBService:
        this.persistanceService = new persistance_service_1.PersistanceService();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new user_model_1.User(new mongodb_1.ObjectID(), req.body.firstName, req.body.lastName, req.body.address, req.body.notes);
                yield this.persistanceService.createOrUpdate(user);
                res.sendStatus(201);
            }
            catch (error) {
                console.error(error);
                res.status(500).json(error);
            }
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.persistanceService.list();
                res.send(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json(error);
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = new mongodb_1.ObjectID(req.params.userId);
                const user = yield this.persistanceService.show(userId);
                res.send(user);
            }
            catch (error) {
                let err, status;
                if (error && error.code === "ENOENT") {
                    err = "User not found";
                    status = 404;
                }
                else {
                    err = error;
                    status = 500;
                }
                res.status(status).json(err);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = new mongodb_1.ObjectID(req.params.userId);
                const user = yield this.persistanceService.show(userId);
                if (req.params.noteId) {
                    const noteId = new mongodb_1.ObjectID(req.params.noteId);
                    const noteToDelete = user.notes.findIndex(n => n._id === noteId);
                    user.notes.splice(noteToDelete, 1);
                    yield this.persistanceService.createOrUpdate(user);
                    res.sendStatus(204);
                }
                else {
                    yield this.persistanceService.delete(userId);
                    res.sendStatus(204);
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = new mongodb_1.ObjectID(req.params.userId);
                const user = yield this.persistanceService.show(userId);
                const note = new note_model_1.Note(new mongodb_1.ObjectID(), req.body.note, req.body.comment, req.body.level);
                user.notes.push(note);
                yield this.persistanceService.createOrUpdate(user);
                res.status(200).json(user);
            }
            catch (error) {
                console.error(error);
                res.status(500).json(error);
            }
        });
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map