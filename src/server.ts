import app from './app';

const APP_PORT = process.env.PORT || 3000;

app.listen(APP_PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`🚀 Server started on port ${APP_PORT}!`);
});
