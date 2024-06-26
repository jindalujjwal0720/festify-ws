const mongoose = require("mongoose");

const instanceSchema = new mongoose.Schema(
  {
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    creds: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creds",
      required: true,
    },

    // Instance details
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
    allowedOrigins: {
      type: [String],
      default: [],
    },

    // API limits
    apiCalls: {
      type: Number,
      default: 0,
      required: true,
    },
    lastApiCallTime: {
      type: Date,
    },
    // for billing
    lastApiCallReset: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @param {mongoose.Connection} db
 * @returns
 */
module.exports = (db) => {
  if (!db.models.Instance) return db.model("Instance", instanceSchema);
  return db.models.Instance;
};
