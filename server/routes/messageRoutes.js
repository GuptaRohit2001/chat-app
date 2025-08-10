import express from 'express';
import { protecteRoute } from '../middleware/auth.js';
import { getMessages, getUsersForSidebar, markMessageAsSeen } from '../controllers/messageController.js';


const messageRouter=express.Router();
messageRouter.get("/users",protecteRoute,getUsersForSidebar);
messageRouter.get("/:id",protecteRoute,getMessages);
messageRouter.put("mark/:id",protecteRoute,markMessageAsSeen);

export default messageRouter;