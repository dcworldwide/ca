import { getEnvironment } from "./environment"


/**
 * Local storage keys, prefixed by environment to avoid issues when testing 
 * multiple envs in the same browser session.
 */
const env = getEnvironment()
const LS_PREFIX = "ca_"
export const APP_NAME = "cebuanna"
export const APP_VERSION = LS_PREFIX + env + "_version"
export const LOG_LEVEL_KEY = LS_PREFIX + env + "_log_level"
export const LS_CURRENCY = LS_PREFIX + env + "_currency"

