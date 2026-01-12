import mongoose, {Schema} from "mongoose";

const likeSchema = new Schema(
    {
        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
        likedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        tweet: {
            type: Schema.Types.ObjectId,
            ref: "Tweet"
        }
    },
    {timestamps: true}
)

// “Ek hi user (likedBy) ek hi video ko sirf ek baar like kar sakta hai”
likeSchema.index(
  { tweet: 1, likedBy: 1 },
  {
    unique: true,
    partialFilterExpression: {
      tweet: { $exists: true }
    }
  }
);

likeSchema.index(
  { comment: 1, likedBy: 1 },
  {
    unique: true,
    partialFilterExpression: {
      comment: { $exists: true }
    }
  }
);

likeSchema.index(
  { video: 1, likedBy: 1 },
  {
    unique: true,
    partialFilterExpression: {
      video: { $exists: true }
    }
  }
);

export const Like = mongoose.model("Like", likeSchema)
