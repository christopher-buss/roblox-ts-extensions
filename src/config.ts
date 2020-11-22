/**
 * Check if an value is an array and only filled with strings.
 */
function checkArray(arr: unknown | undefined) {
	return arr !== undefined && Array.isArray(arr) && !arr.some(val => typeof val !== "string");
}

/**
 * The plugin's configuration.
 */
export interface PluginConfig {
	useRojo: boolean,
	client: string[],
	server: string[],
	mode: "remove" | "prefix"
}


/**
 * Get the PluginConfig with sanity checks and default values.
 * @param config The config directly from the plugin.
 */
export function getConfig(config: any): PluginConfig {
	return {
		mode: config.mode === "remove" ? "remove" : "prefix",
		useRojo: typeof config.useRojo === "boolean" ? config.useRojo : true,
		client: typeof config.client === "string" ? [config.client] : checkArray(config.client) ? config.client : [],
		server: typeof config.server === "string" ? [config.server] : checkArray(config.server) ? config.server : [],
	}
}