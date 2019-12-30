import { Router } from 'express';
import { ItemsWebsocketController } from '../items-websocket/items-websocket.controller';
export declare function itemsRouterFactory(itemsWebsocketController: ItemsWebsocketController): Router;
