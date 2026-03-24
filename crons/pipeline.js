/**
 * Pipeline cron job.
 * Schedules the automated Reddit-to-TikTok content pipeline to run on a recurring basis.
 */

/**
 * Registers and starts the main pipeline cron job.
 * By default this runs once per day at 09:00.
 *
 * @param {string} [schedule='0 9 * * *'] - A cron expression defining the run schedule.
 * @returns {import('node-cron').ScheduledTask} The scheduled cron task instance.
 */
export function startPipelineCron(schedule = '0 9 * * *') {}
