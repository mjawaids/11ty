module.exports = function (eleventyConfig) {
    // Copy the assets folder to _site/assets
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addWatchTarget('src/assets');

    eleventyConfig.addCollection('projects', (collection) => {
        return collection.getFilteredByGlob('src/projects/*.md');
    });

    eleventyConfig.addShortcode('year', () => {
        return `${new Date().getFullYear()}`;
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};