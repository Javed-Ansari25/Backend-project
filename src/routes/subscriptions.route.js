import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { 
    toggleSubscription, getChannelSubscribers, getUserSubscribedChannels, getSubscriberCount, checkUserSubscribed 
} from "../controllers/subscription.controllers.js";

const router = Router();
router.use(verifyJWT);

// route
router.route("/toggle/:channelId").post(toggleSubscription);

// Channel subscribers list
router.route("/c/:channelId/subscribers").get(getChannelSubscribers);

// Channel subscriber count
router.route("/c/:channelId/count").get(getSubscriberCount);

// Logged-in user subscriptions
router.route("/my-subscriptions").get(getUserSubscribedChannels);

// Check subscribed or not
router.route("/check/:channelId").get(checkUserSubscribed);

export default router
