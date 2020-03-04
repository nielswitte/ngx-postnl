export interface PostNlConfig {
    /**
     * PostNL Api key
     * Required
     */
    apiKey: string;

    /**
     * Should be set to true when testing
     */
    sandbox?: boolean;
}
