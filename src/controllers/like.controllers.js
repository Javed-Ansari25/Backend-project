import mongoose from "mongoose";
import { Like } from "../models/likes.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const toggleVideoLike = asyncHandler(async (req, res) => {
    const {videoId} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(videoId)) {
        throw new ApiError(400, "Invalid video id");
    }

    const unLiked = await Like.findOneAndDelete({
        video: videoId,
        likedBy: req.user?._id
    })

    if (unLiked) {
        return res.status(200).json(
            new ApiResponse(200, { liked: false }, "Video unLiked")
        );
    }

    await Like.create({
        video: videoId,
        likedBy: req.user._id
    })

    return res.status(201).json(
        new ApiResponse(201, { liked: true }, "Video liked")
    );
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params;
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        throw new ApiError(400, "Invalid comment id");
    }

    const unLiked = await Like.findOneAndDelete({
        comment: commentId,
        likedBy: req.user?._id
    })

    if (unLiked) {
        return res.status(200).json(
            new ApiResponse(200, { liked: false }, "comment unLiked")
        );
    }

    await Like.create({
        comment: commentId,
        likedBy: req.user._id
    })

    return res.status(201).json(
        new ApiResponse(201, { liked: true }, "comment liked")
    );
})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const {tweetId} = req.params;

    if (!mongoose.Types.ObjectId.isValid(tweetId)) {
        throw new ApiError(400, "Invalid tweet id");
    }

    const unLiked = await Like.findOneAndDelete({
        tweet: tweetId,
        likedBy: req.user?._id
    })

    if (unLiked) {
        return res.status(200).json(
            new ApiResponse(200, { liked: false }, "tweet unLiked")
        );
    }

    await Like.create({
        tweet: tweetId,
        likedBy: req.user._id
    })

    return res.status(201).json(
        new ApiResponse(201, { liked: true }, "tweet liked")
    );
})

const getLikedVideos = asyncHandler(async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.user._id)) {
        throw new ApiError(400, "Invalid userId");
    }

    const likedVideos = await Like.find({
        likedBy : req.user?._id,
        video: {$ne : null}
    })
    .populate("video")
    .sort({createdAt: -1});

    return res.status(200).json(
        new ApiResponse(200, likedVideos, "Liked videos fetched successfully")
    );
})

export {toggleVideoLike, toggleCommentLike, toggleTweetLike, getLikedVideos}
