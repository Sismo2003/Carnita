/**
 * Logger utility.
 * Provides a simple, consistent logging interface for the pipeline.
 */

/**
 * Logs an informational message.
 *
 * @param {string} message - The message to log.
 * @param {object} [meta={}] - Optional metadata to include with the log entry.
 * @returns {void}
 */
export function logInfo(message, meta = {}) {}

/**
 * Logs a warning message.
 *
 * @param {string} message - The warning message to log.
 * @param {object} [meta={}] - Optional metadata to include with the log entry.
 * @returns {void}
 */
export function logWarn(message, meta = {}) {}

/**
 * Logs an error message.
 *
 * @param {string} message - The error message to log.
 * @param {Error|object} [error={}] - The error object or additional metadata.
 * @returns {void}
 */
export function logError(message, error = {}) {}
