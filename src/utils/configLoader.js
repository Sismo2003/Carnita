/**
 * Config loader utility.
 * Loads and validates environment variables required by the pipeline.
 */

/**
 * Loads environment variables from the .env file and returns a validated config object.
 * Throws an error if any required variable is missing.
 *
 * @returns {{
 *   redditClientId: string,
 *   redditClientSecret: string,
 *   redditUsername: string,
 *   redditPassword: string,
 *   anthropicApiKey: string,
 *   elevenLabsApiKey: string,
 *   tiktokAccessToken: string
 * }} A config object with all required environment variables.
 */
export function loadConfig() {}
