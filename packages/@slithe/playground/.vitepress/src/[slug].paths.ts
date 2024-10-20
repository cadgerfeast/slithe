// Constants
const dynamicRoutes = process.env.SLITHE_PLAYGROUND_DYNAMIC_ROUTES.split(',');

export default {
	paths: () => {
		return dynamicRoutes.map((slug) => ({
			params: { slug }
		}))
	}
};
