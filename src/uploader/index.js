/**
 * TikTok uploader module.
 * Handles uploading a finished video file to TikTok via the TikTok Content Posting API.
 */

/**
 * Uploads a video file to TikTok.
 *
 * @param {string} videoPath - Absolute path to the video file to upload.
 * @param {object} metadata - Video metadata for the post.
 * @param {string} metadata.title - Caption / title for the TikTok post.
 * @param {string[]} [metadata.hashtags=[]] - Array of hashtag strings to include in the caption.
 * @param {object} [options={}] - Optional parameters.
 * @param {boolean} [options.dryRun=false] - When true, skips the actual upload (for testing).
 * @returns {Promise<object>} Resolves with the TikTok API response object.
 */
export async function uploadVideo(videoPath, metadata, options = {}) {}
