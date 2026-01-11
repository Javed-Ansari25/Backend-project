import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createTweet, getAllTweets, getUserTweetsByID, updateTweet, deleteComment } from "../controllers/tweets.controllers.js";

const router = Router();
app.use(verifyJWT); 

// routes
router.route("/")
.post(createTweet)
.get(getAllTweets)

router.route("/:userId")
.get(getUserTweetsByID)

router.route("/c/:tweetId")
.patch(updateTweet)
.delete(deleteComment)

export default router
